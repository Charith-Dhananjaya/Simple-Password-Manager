import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

// using this we can send any data to db
app.use(express.json());

// when get data to frontend, backend API not allowed. Prevent this, apply cors
app.use(cors());

// check, backend run on port 8000
app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to backend");
  }
});

// backend connect to db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sanjula1234",
  database: "pwm",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("db is connected !");
  }
});

// check backend's work
app.get("/", (req, res) => {
  res.json("hello this is the backend");
});

// Get all passwords
app.get("/passwords", (req, res) => {
  const q = "SELECT * FROM pwm.passwords";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// Get No. of raws
app.get("/total", (req, res) => {
  const q = "SELECT COUNT(id) FROM passwords";

  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      
      res.json(data);

    }
  });
});

// post password
app.post("/passwords", (req, res) => {
  const q =
    "INSERT INTO passwords(`user`, `password`, `title`, `site`, `pic`) VALUES (?)";

  const values = [
    req.body.user,
    req.body.password,
    req.body.title,
    req.body.site,
    req.body.pic,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// delete password
app.delete("/passwords/:id", (req, res) => {
  const q = " DELETE FROM passwords WHERE id = ? ";
  const passwordId = req.params.id;

  db.query(q, [passwordId], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// update password
app.put("/passwords/:id", (req, res) => {
  const q =
    "UPDATE passwords SET `user`= ?, `password`= ?, `title`= ?, `site`= ?, `pic`= ? WHERE id = ?";
  const passwordId = req.params.id;

  const values = [
    req.body.user,
    req.body.password,
    req.body.title,
    req.body.site,
    req.body.pic,
  ];

  db.query(q, [...values, passwordId], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
