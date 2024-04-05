// To run the script type node backend.js in the terminal

const express = require('express');
const cors = require('cors');
const Papa = require('papaparse');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/data', (req, res) => {
  const csvFile = fs.createReadStream('TableData.csv');

  Papa.parse(csvFile, {
    header: true,
    complete: (results) => {
      res.json(results.data);
    }
  });
});

app.listen(5000, () => console.log('Server started on port 5000'));
