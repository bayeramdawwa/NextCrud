export default {
  getcourse: `/dashbord/courses`,
  addcourse: `/dashbord/courses/add`,
  getByIdcourse: (id) => `/dashbord/courses/${id}`,
  editcourse: (id) => `/dashbord/courses/edit/${id}`,
    //
  getteacher: `/dashbord/teachers`,
  addteacher: `/dashbord/teachers/add`,
  getByIdteacher: (id) => `/dashbord/teachers/${id}`,
  editteacher: (id) => `/dashbord/teachers/edit/${id}`,
    //
  getstudent: `/dashbord/student`,
  addstudent: `/dashbord/student/add`,
  getByIdstudent: (id) => `/dashbord/student/${id}`,
  editstudent: (id) => `/dashbord/student/edit/${id}`,
};



