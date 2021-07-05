const express = require("express");
const port = 3000;
const app = express();
const session = require("express-session");
const bcrypt = require("bcrypt");

const mongoose = require('mongoose');
const user = require('./models/user')

mongoose.connect("mongodb://localhost/Authentication",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const authMiddleware = (req,res,next)=>{
    if(req.session.isAuth){
        return next();
    }
    return res.redirect("/");
}

const isLoggedIn = (req,res,next)=>{
    if(req.session.isAuth){
        return res.redirect("/profile");
    }
    next();
}

app.use(cookieParser());

app.use(
    session({
        secret : "Coding is best",
        resave : false,
        saveUninitialized : true
    })
)

app.get("/", isLoggedIn,(req,res)=>{
    res.render("login");
})

app.post("/login", async (req,res)=>{
    try{
        const findData = await user.findOne({email : req.body.email});

        if (!findData){
            return res.send("User was not found. Please register.")
        }
        const authentication = await bcrypt.compare(req.body.password, findData.password);

        if(authentication){
            req.session.isAuth = true;
            req.session.email = req.body.email;
            return res.redirect("/profile");
        }
        res.send("Wrong Password. Please try again.");
    }
    catch(error){
        console.log(error);
        res.send("Sorry, there was an error. Please try again.")
    }
});

app.get("/register",(req,res)=>{
    res.render("register");
});

app.post("/register", async (req,res)=>{
    try{
        const hashpassword = await bcrypt.hash(req.body.password, 10);
        var newuser = new user({
            email : req.body.email,
            password : hashpassword
        });
        const saveuser = await newuser.save();
        console.log("user saved!");
        res.redirect("/");
    }
    catch(error){
        console.log(error);
        res.send("Sorry, This email is already in use. Please enter another email.");
    }
});



app.get("/profile", authMiddleware, (req, res) => {
    // res.send("hi");
    const p_email = req.session.email;
    res.render("profile", { p_email });
  });
  
  app.get("/logout", (req, res) => {
    req.session.isAuth = false;
    req.session.email = null;
    res.redirect("/");
  });
  
  app.listen(port, () => {
    console.log(`Serve started on http://localhost:${port}`);
  });