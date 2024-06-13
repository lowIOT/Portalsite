import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <section>
      <h2>My Creations</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <a href={product.link}>{product.name}</a>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
