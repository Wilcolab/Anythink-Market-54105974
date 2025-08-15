const express = require('express');
const app = express();

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Node server running on port 8001');
});
