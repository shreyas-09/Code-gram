import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RatingHistory = () => {
  const [handle, setHandle] = useState(''); // State to store the handle
  const [r, setRating] = useState(''); // State to store the fetched data

  const x = 'shreyas__09_';
  //   setHandle(x);

  if (1) {
    const apiUrl = `https://codeforces.com/api/user.info?handles=shreyas__09_`;

    axios
      .get(apiUrl)
      .then((response) => {
        const ratingData = response.data.result[0].rating;
        setRating(ratingData);
      })
      .catch((error) => {
        console.error('Error fetching rating:', error);
      });
  }

  return (
    <div>
      <h1>{r}</h1>
    </div>
  );
};

export default RatingHistory;
