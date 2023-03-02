import React, { useState } from 'react';

function Propes(props) {
  const [items, setItems] = useState(props.onClick);

  function handleDelete(id) {
    let newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }

  return (
    <div className='container'>
      <h2 className='text-center display-3'>Student Data</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.city}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Propes;
