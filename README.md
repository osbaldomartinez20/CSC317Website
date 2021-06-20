# CSC 317 Term Project

## Purpose

This web application allows for users to see images uploaded by registered users.

## Student Information

|               | Information            |
|:-------------:|:-------------:         |
| Student Name  | Osbaldo Martinez       |
| Student ID    | 916754207              |
| Student Email | omartin6@mail.sfsu.edu |



# Build/Run Instructions

## Build Instructions
1.  Find a tutorial and configure an AWS EC2 ubuntu virtual machine to host your server. https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server
2.  Make sure git and node are installed in the virtual machine, if not then install them.
3.  In the virtual machine pull the repo.
4.  Go to the application/ folder
5.  Use npm install to install node packages
6.  Create a database following template in the js files found at application/config/database_creation_scripts
7.  Change the information of application/config/db.js to the info of your database.
8.  Configure the default value of date in posts table to CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP.
9.  Use sudo npm install pm2 -g to install a module to run the server in background.
10. Use pm2 start server.js to start running server.
11. Close terminal and website should be still running.
12. Got to your public DNS provided by AWS and don't forget the :3000 at the end.

## Run Instructions
1.  Go to application/ folder
2.  Use npm install to install node packages
3.  Create a database following template in the js files found at application/config/database_creation_scripts
4.  Change the information of application/config/db.js to the info of your database.
5.  Configure the default value of date in posts table to CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP.
6.  Use the command npm start
7.  Go to localhost:3000 in a browser
