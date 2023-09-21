const express = require('express');
const cors = require('cors'); 
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");
const authenticatemiddleware = require("./middlewares/authenticate");

const app = express();

const allowedOrigins = ['http://localhost'];


const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Access not permitted'));
    }
  },
};


app.use(express.json());

// Habilitar o CORS para todas as origens (*)
app.use(cors());

app.use("/auth", AuthController);
app.use("/admin", authenticatemiddleware, AdminController);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});