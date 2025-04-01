import { useState, useEffect } from "react";
import axios from "axios";

const GhostSightingPage = () => {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const apiurl = "http://localhost:3000/api/entities/ghost_sightings"

  const fetchData = async(url)=>{

    try{

      const res = await axios.get(url)

      console.log(res.data.data)
      setPosts(res.data.data)

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
      <h1>Paranormal Experiences</h1>
      <button onClick={() => setShowForm(true)}>Add Experience</button>

      {Array.isArray(posts) && posts.map((ele) => (
        <div key={ele._id}>
          <h3>Location: {ele.location}</h3>
          <p><strong>Description:</strong> {ele.description}</p>
          <p>
            <strong>Witness:</strong> {ele.Eye_witness}
          </p>
          {ele.images?.map((img, index) => (
            <img key={index} src={img} alt="Ghosty evidence" />
          ))}
        </div>
      ))}

      {showForm && <ExperienceForm setShowForm={setShowForm} />}

      {/* Note: Add this import at the top of the file: 
      import ExperienceForm from "../components/ExperienceForm"; */}
    </div>
  );
};

export default GhostSightingPage;
