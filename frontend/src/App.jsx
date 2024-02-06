import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const jsonData = await res.json();
      setData(jsonData)
      console.log(jsonData);
      console.log(data);
    };
    fetchData()
  },[]);

  return (
    <>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.id}: {product.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
