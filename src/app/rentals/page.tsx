'use client'
import React, { useEffect, useState } from 'react';

type DataType = {
  rental_id: number;
  rental_name: string;
  cost: number;
  markup_percentage: number;
  markup_dollar: number;
  final_price: number;
};

export default function RentalsPage() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    // Replace '/api/your-route' with your actual API route
    fetch('/api/data')
      .then((res) => res.json())
      .then((json) => setData(json.data.rows || []))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
    
  

  return (
    <div>
      <h1>Rentals</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Rental ID</th>
            <th>Rental Name</th>
            <th>Cost</th>
            <th>Markup Percentage</th>
            <th>Markup Dollar</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rental_id}>
              <td>{item.rental_id}</td>
              <td>{item.rental_name}</td>
              <td>{item.cost}</td>
              <td>{item.markup_percentage}</td>
              <td>{item.markup_dollar}</td>
              <td>{item.final_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

