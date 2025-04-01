import { useState, useEffect } from "react";
import axios from "axios";

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/entities") // Fetch data from backend
      .then((res) => setEntities(res.data))
      .catch((err) => console.error("Error fetching entities:", err));
  }, []);

  return (
    <div>
      <h1>All Entities</h1>
      {entities.length === 0 ? (
        <p>No entities found.</p>
      ) : (
        <ul>
          {entities.map((entity) => (
            <li key={entity._id}>
              <h3>{entity.name}</h3>
              <p>{entity.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EntityList;
