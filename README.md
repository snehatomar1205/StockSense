# StockSense 📦  
*A Smart Inventory Management & Decision Support System*

StockSense is a **full-stack smart inventory management system** built to help businesses track stock in real time, reduce wastage, and make **context-aware restocking decisions** using expiry data, consumption patterns, holidays, and weather conditions.

---

## 🎥 Working Demo / Tutorial
👉 **Complete working walkthrough:**  
https://youtu.be/yqV14k5c_Ig

---

## 🚀 Features

### 👤 Authentication 
- Secure JWT-based authentication
- Protected routes for sensitive operations

---

### 📦 Real-Time Inventory Tracking
- Add, update, and delete products
- Live stock quantity tracking
- Low-stock threshold alerts

---

### ⏰ Expiry & Wastage Control
- Expiry-date tracking for perishable items
- Automated alerts for near-expiry products
- Helps reduce operational wastage

---

### 🧾 Billing & Transactions
- Integrated billing system
- Automatic stock deduction on billing
- Transaction logs for auditing & traceability

---

### 📊 Smart Restocking Suggestions (Core Feature)
- Intelligent restocking recommendations based on:
  - Current stock levels
  - Upcoming **holidays / high-demand dates**
  - **Weather conditions** (via external Weather API)
- Prevents overstocking and understocking

---

### 🌦 Weather-Aware Inventory Logic
- Integrated **Weather API** to adjust stock suggestions
- Example:
  - Increased cold drinks / umbrellas during hot or rainy weather
  - Adjusted demand expectations based on forecasts
- Demonstrates **external API-driven decision making**

---

### 📅 Date, Holiday & Demand Awareness
- Holiday calendar integration
- Anticipates demand spikes during festivals or special dates
- Used directly in restocking logic and alerts

---

### ⏱ Automated Background Jobs (Cron Jobs)
- Scheduled cron jobs for:
  - Daily expiry checks
  - Low-stock monitoring
  - Scheduled alert generation
- Reduces manual intervention and improves reliability

---

### 📝 Task & Operations Support
- Assign inventory-related tasks to staff
- Track task status and completion
- Improves day-to-day operational efficiency

---

## 🛠️ Tech Stack

### Frontend
- **React.js**
- Tailwind CSS
- Axios
- React Router

### Backend
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Node-Cron** for scheduled jobs
- External **Weather API**
- JWT Authentication


---

## ⚙️ Core APIs

- Authentication APIs
- Product & Inventory CRUD APIs
- Billing & transaction APIs
- Task management APIs
- Weather data integration APIs
- Cron-triggered background processes

---

## 🧠 Engineering Highlights

- Designed **context-aware inventory logic** instead of static thresholds
- Integrated **external weather data** to influence business decisions
- Implemented **cron-based background jobs** for automation
- Ensured data consistency between billing and inventory
- Built with real-world operational constraints in mind

---

## 📈 Future Enhancements
- Sales & demand forecasting using ML
- Analytics dashboard with visual insights
- Barcode / QR code scanning
- Supplier integration
- Cloud deployment with CI/CD

---

## 🧑‍💻 Author
**Sneha**  
2nd Year Computer Science Student  
Focused on Full-Stack Development & Real-World Problem Solving  

---

## ⭐ Support
If you find this project useful, consider giving it a ⭐  
Feedback and contributions are welcome!
