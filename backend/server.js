require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cron = require("node-cron");

const authRoutes = require("./routes/authRoutes.js");
const stockRoutes = require('./routes/stock.routes.js');
const billingRoutes = require('./routes/billing.routes.js');
const clothingRoutes = require('./routes/clothing');
const clothingBillingRoutes = require('./routes/clothingBilling');
const notificationRoutes = require('./routes/notification.routes');

const { checkFestivalNotifications } = require("./weather.cron");

const app = express();

// CORS
app.use(cors({
  origin: ['http://localhost:5173', 'https://stocksense-lvxp.onrender.com'],
  credentials: true
}));

// Middleware
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/stocks", stockRoutes);
app.use("/api/billing", billingRoutes);
app.use("/api/clothing", clothingRoutes);
app.use("/api/clothing-billing", clothingBillingRoutes);
app.use("/api/notifications", notificationRoutes);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
};

// Cron jobs
cron.schedule('0 9 * * *', async () => {
  console.log("Running daily festival notifier...");
  checkFestivalNotifications();
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  checkFestivalNotifications();
  console.log(`Server running on PORT: ${PORT}`);
});

//cron scripts 
require('./weather.cron');
require('./restockNotifier');
