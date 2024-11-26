import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, "bookings"));
      setBookings(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.email} - {booking.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
