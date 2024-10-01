import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./bikeList.css"

function BikeList() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    axios.get('/api/bikes')
      .then(response => setBikes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Available Bikes</h2>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={'../../assets/bike-13079.png'} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
      <div className="bike-grid">
        {bikes.map(bike => (
          <div key={bike.id} className="bike-card">
            <img src={bike.imageUrl} alt={bike.name} />
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BikeList;

