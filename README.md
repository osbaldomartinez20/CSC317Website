# CSC 317 Term Project

## Purpose

The purpose of this repository is to store all the code for your web application. This also includes the history of all commits made and who made them. Only code submitted on the master branch will be graded.

Please follow the instructions below and fill in the information requested when prompted.

## Student Information

|               | Information            |
|:-------------:|:-------------:         |
| Student Name  | Osbaldo Martinez       |
| Student ID    | 916754207              |
| Student Email | omartin6@mail.sfsu.edu |



# Build/Run Instructions

## Build Instructions
1. Find a tutorial and configure an AWS EC2 ubuntu virtual machine to host your server. https://ourcodeworld.com/articles/read/977/how-to-deploy-a-node-js-application-on-aws-ec2-server
2. Make sure git and node are installed in the virtual machine, if not then install them.
3. In the virtual machine pull the repo.
4. Go to the application/ folder
5. Use npm install to install node packages
6. Create a database following template in the js files found at application/config/database_creation_scripts
7. Change the information of application/config/db.js to the info of your database.
8. Configure the default value of date in posts table to CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP.
9. Use npm start to start a connection.

## Run Instructions
1. Go to application/ folder
2. Use the command npm install
3. Use the command npm start
4. Go to localhost:3000 in a browser
