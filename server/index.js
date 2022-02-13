require('dotenv').config({path: '../.env'});
const path = require('path');
const api = require('./api');
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(cors({credentials: true}));

app.post('/api', async (req, res) => {
  const mood = req.body.mood;
  const genres = req.body.genre;
  const result = await api.getRecommendation(genres, mood);
  res.json(result);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})
