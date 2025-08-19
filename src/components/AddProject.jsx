import React, { useState } from "react";
import './AddProject.css';

function AddProject({ handleAddProject }) {

    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [budget, setBudget] = useState("");


    function submit(e) {
        e.preventDefault();

        let newProject;

        if (title && name && status && date && budget) {
            newProject = {

                title,
                name,
                status,
                date,
                budget,
            };



            fetch("http://localhost:5000/projects", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(newProject)
            })

                .then(res => res.json())
                .then(data => {
                    handleAddProject(data);

                    setName("");
                    setTitle("");
                    setStatus("Not Started");
                    setBudget("");
                    
                })

                .catch(err => console.log(err))


        } else {
            alert("Please fill in all the fields")

        }

    }
    return (
        <>
            <form>
                <label>Enter Project Title:</label><input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}></input><br></br>
                <label>Client Name:</label><input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input><br></br>
                <label>Status:</label>
                <select defaultValue="Not Started" value={status} onClick={(e) => setStatus(e.target.value)}>
                    <option value="Not Started">Not Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="On Hold">On Hold</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <br></br>
                <label>Due Date:</label><input type="date" value={date} onChange={(e)=> setDate(e.target.value)}></input><br></br>
                <label>Budget:</label> <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)}></input>
            </form>

            <button onClick={submit}>Submit</button>
        </>
    )
}

export default AddProject;