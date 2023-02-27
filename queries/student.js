const getUsersQuery = filter => `SELECT * FROM tenant_users ${filter} ORDER BY created_at DESC LIMIT $1 OFFSET $2`;

/*const findTenantMapByValueQuery = filter => `SELECT map.organisation_id, map.role_id, org.name, org.reference, org.is_active,
                                             org.is_verified, map.is_manager, org.supported_country, roles.name AS role_name, 
                                             roles.description AS role_desc, roles.reference AS role_ref, tenant.first_name,
                                             tenant.last_name, tenant.email, tenant.phone, tenant.picture, tenant.id AS user_id,
                                             map.is_favourite, org.org_flow
                                             FROM tenant_map map
                                             INNER JOIN organisation_roles_matrix roles ON map.role_id = roles.id
                                             INNER JOIN tenant_organisation org ON map.organisation_id = org.id
                                             INNER JOIN tenant_users tenant ON map.user_id = tenant.id
                                             WHERE ${filter}`;*/

const findStudentByValueQuery = filter => `SELECT * FROM students WHERE ${filter}`;

const createStudentQuery = `INSERT INTO students (id, first_name, last_name, matric_number, email, password) 
                                     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;


module.exports = {
  getUsersQuery,
  findStudentByValueQuery,
  createStudentQuery
}