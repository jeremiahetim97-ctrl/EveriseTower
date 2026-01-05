const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const app = express();
app.use(cors());
app.use(express.json());

// --- 1. CLOUD DATABASE CONNECTION ---
// We used %40 to encode the '@' in your password
const dbURI = "mongodb+srv://jeremiahetim97_db_user:Abidemi%4098@cluster0.d7or471.mongodb.net/everrise?retryWrites=true&w=majority";

mongoose.connect(dbURI)
  .then(() => console.log("✅ CLOUD DATABASE CONNECTED"))
  .catch((err) => console.log("❌ DATABASE ERROR: ", err.message));

// --- 2. THE SECURE SIGNUP ROUTE ---
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Signup failed. User may already exist." });
  }
});

// --- 3. THE LOGIN ROUTE ---
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid password" });

    res.status(200).json({ message: "Login successful!", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: "Server error during login" });
  }
});

app.listen(5000, () => {
  console.log("🚀 SERVER STARTED ON PORT 5000");
});