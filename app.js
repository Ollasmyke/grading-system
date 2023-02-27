require('dotenv').config();

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const path = require('path');
const createError = require('http-errors');
const morgan = require('morgan');

global.appRoot = path.resolve(__dirname);
global.appName = 'Grading System';
global.appVersion = 'Version.1';
global.patchVersion = process.env.VERSION;
global.baseRemoteUrl = process.env.ENVIRONMENT_URL;

const port = process.env.PORT || 8000;
const swaggerDocument = require('./middlewares/utils/swagger.json');
const app = express();
const indexRouter = require('./routes/index');
const studentRouter = require('./routes/student');
const courseRouter = require('./routes/course');
const gradeRouter = require('./routes/grade');

app.listen(port, () => console.log(`[${appName}]: grading-system:${port}`));
app.set('views', `${appRoot}/middlewares/views`);
app.set('view engine', "pug");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Accept", "application/json");
  res.header("Access-Control-Allow-Credentials", 'true');
  next();
});

app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use('/courses', courseRouter);
app.use('/grades', gradeRouter);
app.use(`/api-doc`, swaggerUi.serve);
app.get(`/api-doc`, swaggerUi.setup(swaggerDocument, false, {"docExpansion": 'none'}));


app.use((req, res, next) => {
  next(createError(404, 'This URL does not exist!'));
});

app.use((error, req, res, next) => {
  res['status'](error['status'] || 500);
  res['render']('error', {header: '404 Not Found', message: 'Use discovery service'});
  next();
});

module.exports = app;