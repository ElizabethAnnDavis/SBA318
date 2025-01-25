# SBA 318: Express Server Application ✔

### Documentation:
#### USERS
##### GET all users:
[All users (localhost:3000/api/users)]

##### POST new user:
[NEW user (localhost:3000/api/users)]
###### INCLUDE:
- {
-    "name": "Users Name",
-    "username": "Users username",
-    "email": "Users email@email.com"
- }

##### GET specific user:
[SPECIFIC user (localhost:3000/api/users/:id)]

##### PATCH specific user:
[SPECIFIC user (localhost:3000/api/users/:id)]
###### INCLUDE(any desired):
- {
-    "name": "Users Name",
-    "username": "Users username",
-    "email": "Users email@email.com"
- }

##### DELETE specific user:
[SPECIFIC user (localhost:3000/api/users/:id)]

#### POSTS
##### GET all posts:
[All posts (localhost:3000/api/posts)]

##### POST new post:
[NEW post (localhost:3000/api/posts)]
###### INCLUDE:
- {
-    "userId": "Users ID",
-    "title": "Post Title",
-    "content": "Post Content"
- }

#### COMMENTS
##### GET all posts:
[All comments (localhost:3000/api/comments)]

[NEW comment (localhost:3000/api/comments)]
###### INCLUDE:
- {
-    "postId": "Post ID",
-    "userId": "User ID",
-    "content": "Comment Content"
- }


### Objectives:
*  -  Create a server application with Node and Express.
*  -  Create a RESTful API using Express.
*  -  Create Express middleware.
*  -  Use Express middleware.
*  -  Use a template engine to render views with Express.
*  -  Interact with a self-made API through HTML forms.

### Instructions:
*  -  Create a small Node and Express server application.

### Requirements:
*  ✔  5%  --> Create and use at least two pieces of custom middleware.
*    
*  ✔  5%  --> Create and use error-handling middleware.
*    
*  ✔  5%  --> Use at least three different data categories (e.g., users, posts, or comments)
*    
*  ✔  5%  --> Utilize reasonable data structuring practices.
*    
*  ✔  5%  --> Create GET routes for all data that should be exposed to the client.
*    
*  ✔  5%  --> Create POST routes for data, as appropriate. 
*             At least one data category should allow for client creation via a POST request.
*    
*  ✔  5%  --> Create PATCH or PUT routes for data, as appropriate. 
*             At least one data category should allow for client manipulation via a PATCH or PUT request.
*    
*  ✔  5%  --> Create DELETE routes for data, as appropriate. 
*             At least one data category should allow for client deletion via a DELETE request.
*    
*  ✔  5%  --> Utilize route parameters, where appropriate.
*    
*  ✔ 10%  --> Adhere to the guiding principles of REST.
*    
*  ✔  5%  --> Utilize reasonable code organization practices.
*    
*  ✔ 10%  --> Ensure that the program runs without errors 
*             (comment out things that do not work, and explain your blockers - you can still receive partial credit).
*    
*  ✔  5%  --> Commit frequently to the git repository.
*    
*  ✔  2%  --> Include a README file that contains a description of your application.
*    
*  ✔  5%  --> Level of effort displayed in creativity, presentation, and user experience.