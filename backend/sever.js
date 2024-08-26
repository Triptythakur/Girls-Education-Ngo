const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/formData')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema and Model
const formSchema = new mongoose.Schema({
    name: String,
    father: String,
    Dob: String,
    class: String
});

const FormData = mongoose.model('FormData', formSchema);

// API route to handle form submission
app.post('/submit', async (req, res) => {
    const { name, father, Dob, class: studentClass } = req.body;
    
    try {
        const newForm = new FormData({
            name,
            father,
            Dob,
            class: studentClass
        });

        await newForm.save();
        res.status(201).json({ message: "Form data saved successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Error saving form data", error: err });
    }
});

// Start the server
const PORT = process.env.PORT || 7008;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

