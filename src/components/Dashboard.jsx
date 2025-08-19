import React from "react";
import './Dashboard.css';


function Dashboard({ projects , setProjects}) {

function handleDeleteProject(id){

  console.log(id); 

  fetch(`https://freelanceflow-twbh.onrender.com/projects/${id}`, {
    method: "DELETE",
  })
  .then(()=>{
    setProjects(prev => prev.filter(project => project.id !== id));
  })
  .catch(err => console.log(err));
}
  return (
    <>

        {/* if projects array is empty then show 'no projects found' */}
      {projects.length === 0 ? (
        <p>No Projects Found</p>
      ) : (

        //otherwise show the list of projects
        <ul className="user-list">
          {projects.map((user, index) => (
            <li key={index} className="user-item">
              <div>
                <p>Title: {user.title}</p>
              </div>

              <div>
                <p>Name: {user.name}</p>
              </div>

              <div>
                <p>Status: {user.status}</p>
              </div>

              <div>
                <p>Due Date: {user.date}</p>
              </div>

              <div>
                <p>Budget: £{user.budget}</p>
              </div>

              <div>
                <button onClick={() => handleDeleteProject(user.id)}>Delete</button>
                </div>
              <br />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Dashboard;
