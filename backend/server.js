const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");

app.use(cors());
app.use(bodyParser.json());

const CONNECTION_URL =
"mongodb+srv://pharma-drugs.qzgvvb3.mongodb.net/myFirstDatabase";
const PORT = process.env.PORT || 3001;


mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log("error: " + error.message));