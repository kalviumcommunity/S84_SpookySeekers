import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './EntitiesListPage.css';


const EntitiesListPage = () => {
  const [entities, setEntities] = useState({});
  const navigate = useNavigate();

const apiurl = "http://localhost:3000/api/entities"

  const fetchData = async (url) => {
    try{
      const res = await axios.get(url)
      console.log(res.data.data) 
      setEntities(res.data.data)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
   fetchData(apiurl)
  }, []);

  return (
    <div className="entities-container">
      <h1 className="h1">Entities</h1>
      <button className="add-entity-btn" onClick={() => navigate("/add-entity")}>
        Add New Entity
      </button>
      <div className="cards">
        {Object.keys(entities).map((ele, index) => (
          <div key={index} className="entity-card">
            <h3>{ele}</h3>
            <button className="cta-button" id="update">
            Update
          </button>
            <button className="cta-button" >
            Delete
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntitiesListPage;
