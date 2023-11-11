const baseUrl = "http://localhost:3000";

export default {
  courses: {
    get: `${baseUrl}/courses`,
    getById: (id) => `${baseUrl}/courses/${id}`,
    edit: (id) => `${baseUrl}/courses/${id}`,
    delete: (id) => `${baseUrl}/courses/${id}`,
    add: `${baseUrl}/courses`,
  },
  teachers: {
    get: `${baseUrl}/teachers`,
    getById: (id) => `${baseUrl}/teachers/${id}`,
    edit: (id) => `${baseUrl}/teachers/${id}`,
    delete: (id) => `${baseUrl}/teachers/${id}`,
    add: `${baseUrl}/teachers`,
  },
  students: {
    get: `${baseUrl}/students`,
    getById: (id) => `${baseUrl}/students/${id}`,
    edit: (id) => `${baseUrl}/students/${id}`,
    delete: (id) => `${baseUrl}/students/${id}`,
    add: `${baseUrl}/students`,
  },


};
