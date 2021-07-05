# security_page
This is my password-protected node.js login page project.

In this project, I have made a login page that needs an email and a password to show the profile page of a particular user.
If the user is not registered in the mongoBD database, the user can click on the register button and register.
Once the user makes her id, she could now log in to the website via the login page.
The password is hash secured. So no one can easily break into the system and hack the credentials of the user.

When the user successfully logs in, her "session" is stored on the server. Hence, she could now login into another tab on the same browser without entering the email and password again and again.

On the profile page, I have made a logout button. By clicking on it, the user can quickly log out of the website, and the session that was stored with the server gets 'killed' automatically.

I have not included the node modules in this repository to make it compact and easily transferrable. You are requested to download the required node modules yourself.
Also, I have not added any styling to keep the project straightforward and more inclined towards the actual functionality.

Steps to clone the project and run it on your local machine:
1) Download the Zip file by clicking on the 'download code' button.
2) Extract the files.
3) Open the folder in an editor (VS Code is preferred).
4) Download all the required dependencies by entering 'npm i' in the terminal.
5) Set the various URLs used in the code according to your machine.
6) Now run the code by entering 'npm start.'
7) Open the localhost:3000 on your browser, and your website is ready to be used.

Note: Use nodemon to automatically refresh the server after saving changes.

Dependencies used:
1) bcrypt version 5.0.1
2) cookie-parser version 1.4.5
3) ejs version 3.1.6
4) express version 4.17.1
5) express-session version 1.17.1
6) mongoose version 5.12.2

