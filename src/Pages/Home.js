import React, { useState } from "react";
import CustomCalendar from "../Components/Calendar";
import BookingForm from "../Components/BookingForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import './Home.css'; 

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBookingSubmit = async (booking) => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

   
    const bookingDateTime = new Date(selectedDate);
    const [hours, minutes] = booking.time.split(":");
    bookingDateTime.setHours(hours);
    bookingDateTime.setMinutes(minutes);

    
    await addDoc(collection(db, "bookings"), {
      ...booking,
      dateTime: bookingDateTime.toISOString(),
    });

    alert("Booking successful!");
  };

  return (
    <div className="home-container">
      <h1>Schedule Your Appointment</h1>

      <div className="calendar-container">
        <CustomCalendar onDateChange={setSelectedDate} />
      </div>

      <div className="booking-form-container">
        <BookingForm onSubmit={handleBookingSubmit} />
      </div>
    </div>
  );
};

export default Home;
