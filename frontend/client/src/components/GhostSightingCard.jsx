const { useState } = require("react");
import axios from "axios"

const ExperienceForm = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    location: "",
    description: "",
    witness: "",
    images: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/posts", formData);
    setShowForm(false);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Location" onChange={(e) => setFormData({ ...formData, location: e.target.value })} required />
      <textarea placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })} required />
      <input type="text" placeholder="Witness" onChange={(e) => setFormData({ ...formData, witness: e.target.value })} required />
      <input type="file" multiple onChange={(e) => setFormData({ ...formData, images: [...e.target.files] })} />
      <button type="submit">Submit</button>
    </form>
  );
};
