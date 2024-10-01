import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BikeDetails() {
  const { id } = useParams();
  const [bike, setBike] = useState(null);

  useEffect(() => {
    axios.get(`/api/bikes/${id}`)
      .then(response => setBike(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return bike ? (
    <div>
      <h2>{bike.name}</h2>
      <img src={bike.imageUrl} alt={bike.name} />
      <p>{bike.description}</p>
      <p>Price: {bike.price} per day</p>
      <button>Book Now</button>
    </div>
  ) : (
    <p>Loading...</p>
  );  
//   <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );  
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );  
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );  
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );  
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );  
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//         <p>Loading...</p>
//       );
//     <div>
//       <h2>{bike.name}</h2>
//       <img src={bike.imageUrl} alt={bike.name} />
//       <p>{bike.description}</p>
//       <p>Price: {bike.price} per day</p>
//       <button>Book Now</button>
//     </div>
//   ) : (
//     <p>Loading...</p>
//   );
}

export default BikeDetails;
