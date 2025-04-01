import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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
    <div>
      <h1>Entities</h1>
      <button onClick={() => navigate("/add-entity")}>Add New Entity</button>
      {Object.keys(entities).length === 0 ? (
        <p>Loading entities...</p> ) : (
          Object.keys(entities).map((ele)=>(
            <div key={ele}>
              <h2>{ele}</h2>
            </div>
          ))
        )
      }
    </div>
  );
};

export default EntitiesListPage;
