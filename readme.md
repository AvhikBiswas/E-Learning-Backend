API Documentation
Description
This API provides endpoints for user and admin operations related to course management, user enrollment, profile management, authentication, and image uploading.

Endpoints
User Endpoints
Register User

Method: POST
Endpoint: /register
Description: Registers a new user.
Request Body: JSON containing user details (email, name, password).
Auth Required: No
Sign In User

Method: POST
Endpoint: /signin
Description: Authenticates a user.
Request Body: JSON containing user credentials (email, password).
Auth Required: No
Get User Profile

Method: GET
Endpoint: /profile
Description: Retrieves the profile of the authenticated user.
Auth Required: Yes
Update User Profile

Method: PUT
Endpoint: /profile
Description: Updates the profile of the authenticated user.
Request Body: JSON containing user details to be updated (name, password, profilePicture).
Auth Required: Yes
Filter Courses

Method: GET
Endpoint: /course
Description: Retrieves courses based on filtering criteria.
Query Parameters: category, level
Auth Required: Yes
Enroll in Course

Method: POST
Endpoint: /enroll/:courseId
Description: Enrolls the authenticated user in the specified course.
Path Parameters: courseId
Auth Required: Yes
Get Enrolled Courses

Method: GET
Endpoint: /enroll
Description: Retrieves courses in which the authenticated user is enrolled.
Auth Required: Yes
Upload Profile Picture

Method: POST
Endpoint: /image
Description: Uploads a profile picture for the authenticated user.
Request Body: Form data containing the image file.
Auth Required: Yes
Admin Endpoints
Create Course

Method: POST
Endpoint: /admin/course
Description: Creates a new course.
Request Body: JSON containing course details (title, category, level, popularity).
Auth Required: Yes (Admin)
Update Course

Method: PUT
Endpoint: /admin/update
Description: Updates an existing course.
Request Body: JSON containing updated course details.
Auth Required: Yes (Admin)
Get Admin Courses

Method: GET
Endpoint: /admin/course
Description: Retrieves all courses created by the admin.
Auth Required: Yes (Admin)
Delete Course

Method: DELETE
Endpoint: /admin/course/:courseId
Description: Deletes the specified course.
Path Parameters: courseId
Auth Required: Yes (Admin)
Create Admin

Method: POST
Endpoint: /admin/createAdmin
Description: Creates a new admin user.
Request Body: JSON containing admin details (adminName, adminPassword, adminEmail).
Auth Required: Yes (Admin)
Sign In Admin

Method: POST
Endpoint: /admin/signin
Description: Authenticates an admin user.
Request Body: JSON containing admin credentials (adminEmail, adminPassword).
Auth Required: No
Expected Output
For successful requests, the API returns appropriate HTTP status codes along with the requested data in JSON format.
For errors or failures, the API returns relevant HTTP status codes along with error messages in JSON format.
Notes
Authentication middleware (isAdminAuthed, isUserAuthed) is used to secure certain endpoints.
Multer middleware (upload) is used for handling file uploads.
The API interacts with a database (PostgreSQL) using Prisma ORM.
Ensure proper authentication and authorization mechanisms are implemented in the client application to access the protected endpoints.

email notifiation example:
we can modify it further and make it interactive

email notification while user is register

![Screenshot (39)](https://github.com/AvhikBiswas/E-Learning-Backend/assets/82642119/ff44df10-55cf-428f-8333-af7943e2594b)

email for user reset password 
![Screenshot (38)](https://github.com/AvhikBiswas/E-Learning-Backend/assets/82642119/9a7ffdc7-f916-4bdd-bead-b94550bbe5e1)

email for new course purchase by user
![Screenshot (37)](https://github.com/AvhikBiswas/E-Learning-Backend/assets/82642119/9673489c-9b9c-49b2-be42-37ae0e0f1afc)

default Admin password is there in db.
