// React Form Component
import Navigation from "../../components/Navigation/Navigation.jsx";
import React, { useState } from 'react';
import axios from 'axios';
import "./Form.css";

function EventForm() {
  const [formData, setFormData] = useState({
    eventId: 10, // Initial event id
    eventName: '',
    date: '',
    time: '',
    organization: '',
    location: '',
    description: '',
    image: '',
    link: ''
    // Add other fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/events', formData);
      // Increment eventId for successive submissions
      setFormData({ ...formData, eventId: formData.eventId + 1 });
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      // Handle error
      console.error('Error adding event:', error);
    }
  };

  return (
    <>
    <Navigation/>
    <div className="form-container">
      <h2 className="form-header">Add Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventId" className="form-label">Event ID</label>
        <input type="text" id="eventId" name="eventId" className="form-input" value={formData.eventId} readOnly />

        <label htmlFor="eventName" className="form-label">Event Name</label>
        <input type="text" id="eventName" name="eventName" className="form-input" placeholder="Enter event name" value={formData.eventName} onChange={handleChange} />

        <label htmlFor="date" className="form-label">Date</label>
        <input type="date" id="date" name="date" className="form-input" value={formData.date} onChange={handleChange} />

        <label htmlFor="time" className="form-label">Time</label>
        <input type="time" id="time" name="time" className="form-input" value={formData.time} onChange={handleChange} />

        <label htmlFor="organization" className="form-label">Organization</label>
        <select id="organization" name="organization" className="form-input" value={formData.organization} onChange={handleChange}>
          <option value="">Select organization</option>
          <option value="IEEE">IEEE</option>
          <option value="IE(I)">IE(I)</option>
          <option value="TSA">TSA</option>
          <option value="TRS">TRS</option>
          <option value="TPC">TPC</option>
          <option value="GDSC">GDSC</option>
          <option value="GFG">GFG</option>
          <option value="Codechef">Codechef</option>
          {/* Add other organization options as needed */}
        </select>

        <label htmlFor="location" className="form-label">Location</label>
        <input type="text" id="location" name="location" className="form-input" placeholder="Enter event location" value={formData.location} onChange={handleChange} />

        <label htmlFor="description" className="form-label">Description</label>
        <textarea id="description" name="description" className="form-textarea" placeholder="Enter event description" value={formData.description} onChange={handleChange}></textarea>

        <label htmlFor="image" className="form-label">Image</label>
        <input type="file" id="image" name="image" className="form-input" accept="image/*" onChange={handleChange} />

        <label htmlFor="link" className="form-label">Link</label>
        <input type="text" id="link" name="link" className="form-input" placeholder="Enter event link" value={formData.link} onChange={handleChange} />

        <button type="submit" className="form-submit" >Add Event</button>
      </form>
    </div>
    </>
  );
}

export default EventForm;
