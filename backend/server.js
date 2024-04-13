// server.js (Express.js backend)

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://priyanshshajan03:jyacGZRxq94G0mEH@cluster0.dpkfss5.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

const eventSchema = new mongoose.Schema({
  eventId: Number,
  eventName: String,
  date: Date,
  time: String,
  organization: String,
  location: String,
  description: String,
  image: String,
  link: String
});

const Event = mongoose.model('Event', eventSchema);

app.post('/api/events', function (req, res) {
  try {
    let event = new Event({
        eventId: req.body.eventId,
        eventName: req.body.eventName,
        date: req.body.date,
        time: req.body.time,
        organization: req.body.organization,
        location: req.body.location,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
    });
    event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
