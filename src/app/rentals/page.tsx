'use client'
import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

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
    <Table data={data}/>
  );
}

