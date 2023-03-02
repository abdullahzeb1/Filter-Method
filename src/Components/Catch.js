// import React, { useEffect, useState } from 'react';

// function Catch() {
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/carts')
//       .then((res) => res.json())
//       .then((usre) => {
//         setData(usre);
//       });
//   }, []);
//   return (
//     <div className='container'>
//       <table className='table table-bordered'>
//         <tr>
//           <th>Id</th>
//           <th>UserId</th>
//           <th>Date</th>
//           <th>Products</th>
//         </tr>
//         {data.map((pro) => (
//           <tr>
//             <td>{pro.id}</td>
//             <td>{pro.userId}</td>
//             <td>{pro.data}</td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }

// export default Catch;
