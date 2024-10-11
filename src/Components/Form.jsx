import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({ onSubmit, checkClicked }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    number: "",
    linkedin: "",
    github: "",
    skillName: [""],
    skills: [""],
    degree: [""],
    degreeDescribe: [""],
    projectName: [""],
    projectDescribe: [""],
    positionName: [""],  
    experience: [""],
    aceivement: [""],
  });

  useEffect(() => {
    onSubmit(formData);
  }, [formData, onSubmit]); 

  const handleChange = (e, index, section) => {
    const updateSection = [...formData[section]];
    updateSection[index] = e.target.value;
    setFormData((prevData) => ({ ...prevData, [section]: updateSection }));
  };

  const addSection = (section) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: [...prevData[section], ""], 
    }));
  };

  return (
    <div className="form-container">
      <h2>Personal Details</h2>
      <input
        type="text"
        value={formData.name}
        name="name"
        placeholder="Enter your Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="text"
        value={formData.address}
        name="address"
        placeholder="Enter your address"
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />

      <input
        type="text"
        value={formData.email}
        name="email"
        placeholder="Enter your Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        value={formData.number}
        name="number"
        placeholder="Enter your Phone Number"
        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
      />
      <input
        type="text"
        value={formData.linkedin}
        name="linkedin"
        placeholder=" LinkedIn id link"
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <input
        type="text"
        value={formData.github}
        name="github"
        placeholder=" Github id link"
        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
      />
     
      <h2>Technical Skills</h2>
      {formData.skills.map((skill, index) => (
         <div key={index} className="skills">       
        <input      
          type="text"
          name="skillName"
          value={formData.skillName[index]}
          placeholder=" Title i.e Fronted or backend"
          onChange={(e) => handleChange(e, index, "skillName")}
        />        
        <input      
          type="text"
          name="skills"
          value={skill}
          placeholder="Enter your skills"
          onChange={(e) => handleChange(e, index, "skills")}
        />
         </div>     

      ))}
      <button onClick={() => addSection("skills")}>Add Skill</button>

      <h2>Education</h2>
      {formData.degree.map((degree, index) => (
        <div key={index} className="education">
          <input
            type="text"
            placeholder="Degree name"
            value={degree}
            onChange={(e) => handleChange(e, index, "degree")}
          />
          <textarea
            placeholder="Description of your Education"
            value={formData.degreeDescribe[index]}
            onChange={(e) => handleChange(e, index, "degreeDescribe")}
          ></textarea>
        </div>
      ))}
      <button onClick={() => addSection("degree")}>Add Education</button>

      <h2>Projects</h2>
      {formData.projectName.map((project, index) => (
        <div key={index}className="project" >
          <input
            type="text"
            placeholder="Project name"
            value={project}
            onChange={(e) => handleChange(e, index, "projectName")}
          />
          <textarea
            placeholder="Description of your Project"
            value={formData.projectDescribe[index]}
            onChange={(e) => handleChange(e, index, "projectDescribe")}
          ></textarea>
        </div>
      ))}
      <button onClick={() => addSection("projectName")}>Add Project</button>

      <div className="experience">
        <h2>Experience</h2>
        <div className="check">
          <label htmlFor="checkbox">include</label>
          <input type="checkbox" id="checkbox" onClick={checkClicked} />
        </div>
      </div>

      {formData.positionName.map((position, index) => (
        <div key={index}className="expe-section" >
          <input
            type="text"
            placeholder="Company Name"
            value={position}
            onChange={(e) => handleChange(e, index, "positionName")}
          />
          <textarea
            placeholder="Description of your Experience"
            value={formData.experience[index]}
            onChange={(e) => handleChange(e, index, "experience")}
          ></textarea>
        </div>
      ))}
      <button onClick={() => addSection("positionName")}>Add Experience</button>

      <h2>Achievement & Certification</h2>
      {formData.aceivement.map((achievement, index) => (
        <div key={index} className="achieve">
          <textarea
            placeholder="Description of your Achievement & Certification"
            value={achievement}
            onChange={(e) => handleChange(e, index, "aceivement")}
          ></textarea>
        </div>
      ))}
      <button className="certify" onClick={() => addSection("aceivement")}>Add Certification</button>
    </div>
  );
};

export default Form;
