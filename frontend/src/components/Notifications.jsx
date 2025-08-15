import React, { useEffect, useState } from 'react';
import '../styles/Notifications.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch('https://stocksense-lvxp.onrender.com/api/notifications')
      .then(res => res.json())
      .then(data => setNotifications(data.notifications || []))
      .catch(err => console.error('Error fetching notifications:', err));
  }, []);

  return (
    <div className="notification-box">
      <h2 className="notification-title">Notifications</h2>

      {notifications.length === 0 ? (
        <p className="notification-empty">No notifications yet.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((note, index) => (
            <li key={index} className="notification-item">
              {note.message}
              <span className="notification-date">
                {new Date(note.date).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
