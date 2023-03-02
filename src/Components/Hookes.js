// import React, { useEffect, useState } from 'react';

// function Hookes() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json())
//       .then((user) => {
//         setData(user);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//     console.log(data);
//   }, [data]);
//   return (
//     <div className='container'>
//       <table className='table table-bordered'>
//         <tr>
//           <th>Id</th>
//           <th>Title</th>
//           <th>Price</th>
//           <th>Category</th>
//           <th>Description</th>
//           <th>Image</th>
//         </tr>
//         {data.map((pro) => (
//           <tr>
//             <td>{pro.id}</td>
//             <td>{pro.title}</td>
//             <td>{pro.price}</td>
//             <td>{pro.category}</td>
//             <td>{pro.description}</td>
//             <td>
//               <img style={{ height: '100px' }} src={pro.image} />
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }

// export default Hookes;
