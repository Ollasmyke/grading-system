const getCoursesQuery = filter => `SELECT * FROM courses ${filter} ORDER BY created_at DESC LIMIT $1 OFFSET $2`;

const findCourseByValueQuery = filter => `SELECT * FROM courses WHERE ${filter}`;

const createCourseQuery = `INSERT INTO courses (id, name, code, tutor_name, description, unit) 
                                     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

const updateCourseQuery = (filter, setter) => `UPDATE courses ${setter} WHERE ${filter} RETURNING *`;

const deleteCourseQuery = filter => `DELETE FROM courses WHERE ${filter}`;

module.exports = {
  getCoursesQuery,
  findCourseByValueQuery,
  createCourseQuery,
  updateCourseQuery,
  deleteCourseQuery
}