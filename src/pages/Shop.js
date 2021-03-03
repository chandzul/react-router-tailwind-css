// rsf
import React, { useState, useEffect } from 'react';

function Shop() {
  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
      method: 'GET',
      mode: 'cors'
    });
    const items = await data.json();

    setItems(items);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1 className='text-4xl'>Shop Page</h1>

      <div className="container mx-auto">
        <div class="flex space-x-4 flex-col md:flex-row">


          {items.map((item) => {
            return (
              <div className='flex-1' key={item.id}>
                <h1 className='card__title'>{item.title}</h1>
                <p className='card__description'>{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  );
}

export default Shop;