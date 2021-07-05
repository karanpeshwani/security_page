# security_page
This is my password-protected node.js login page project.

In this project, I have made a login page that needs an email and a password to show the profile page of a particular user.
If the user is not registered in the database, the user can click on the register button and register.
Once the user makes her id, she could now log in to the website via the login page.
The password is hash secured. So no one can easily break into the system and hack the credentials of the user.

When the user successfully logs in, her "session" is stored on the server. Hence, she could now login into another tab on the same browser without entering the email and password again and again.

On the profile page, I have made a logout button. By clicking on it, the user can quickly log out of the website, and the session that was stored with the server gets 'killed' automatically.

I have not included the node modules in this repository to make it compact and easily transferrable. You are requested to download the required node modules yourself.
Also, I have not added any styling to keep the project straightforward and more inclined towards the actual functionality.
