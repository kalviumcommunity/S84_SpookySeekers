import {useState} from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './AddEntityPage.css';

const AddEntityPage = ({onEntityAdded}) => {
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:3000/api/entities/${Name}`, {
                Name,
                Description
            })
            if (res.status==201){
                onEntityAdded();
                navigate('/entities')
            }
        } catch (error) {
            console.log("failed to add entity:", error);
            alert("Failed to add entity!")
        }
    };

    return(
        <div className="form-container">
            <div className="form-box">
            <h1>Add Entity</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <strong>Name: </strong>
                    <input placeholder="Entity Name"
                    type="text"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <br />
                <label>
                    <strong>Description: </strong>
                    <textarea placeholder="Entity Description"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    />
                </label>
                <br />
                <button type='submit'>Add Entity</button>
            </form>
            </div>
        </div>
    )
}

export default AddEntityPage;