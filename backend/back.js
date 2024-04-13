// server.js (Express.js backend)

const express = require('express');
const bodyParser = require('body-parser'); //Hi DB002
const mongoose = require('mongoose');
const cors = require('cors'); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://priyanshshajan03:jyacGZRxq94G0mEH@cluster0.dpkfss5.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Define schema and model for events
const eventSchema = new mongoose.Schema({
  id: String,
  heading: String,
  date: Date,
  location: String,
  description: String,
  img: String
  // Add other fields as needed
});

const Event = mongoose.model('Event', eventSchema);

// Routes
app.post('/api/events', async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
