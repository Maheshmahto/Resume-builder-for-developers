import React, { useRef } from "react";
import styles from "./Preview.module.css";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import html2pdf from "html2pdf.js"; 

const Preview = ({ data, checkbox }) => {
  const previewRef = useRef(); 

  const generatePDF = () => {
    const element = previewRef.current; 

    
    const opt = {
      margin:       1,
      filename:     `${data?.name || "resume"}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },  
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf()
      .set(opt)
      .from(element)
      .save();
  };

  return (
    <>
    

     
      <div className={styles.previewContainer} ref={previewRef}>
        <h1 className={styles.heading}>{data?.name || "Your Name"}</h1>
        <h4>{data?.address || "Address"}</h4>
        <div className={styles.contact}>
          <span className={styles.phone}>
            <FaSquarePhone /> {data?.number || "Number"}
          </span>
          <span className={styles.email}>
            <IoIosMail className={styles.email2} /> {data?.email || "Email"}
          </span>
          <a href={data?.linkedin || "#"} className={styles.linkedin}>
            <FaLinkedin /> {data?.linkedin || "LinkedIn"}
          </a>
          <a href={data?.github || "#"} className={styles.github}>
            <FaGithubSquare /> {data?.github || "GitHub"}
          </a>
        </div>

        {checkbox && (
          <div className={styles.expe}>
            <h2>Experience</h2>
            {data?.positionName?.map((position, index) => (
              <div key={index}>
                <h3>{position || "Company Name"}</h3>
                <ul>
                  <li>{data?.experience[index] || "Description of experience and work"}</li>
                </ul>
              </div>
            ))}
          </div>
        )}

        <h2>Projects</h2>
        {data?.projectName?.map((project, index) => (
          <div key={index}>
            <h3 className="p-name">{project || "Project Name"}</h3>
            <ul>
              <li>{data?.projectDescribe[index] || "Project Description"}</li>
            </ul>
          </div>
        ))}

        <h2>Skills</h2>
        {data?.skills?.map((skills, index) => (
          <div key={index}>
            <h3>{data?.skillName[index] || "Skill Title"}</h3>
            <ul>
              <li>{skills || "Your Skills"}</li>
            </ul>
          </div>
        ))}
        <h2>Education</h2>
        {data?.degreeDescribe?.map((degreeDescribe, index) => (
          <div key={index}>
            <h3>{data?.degree[index] || "Degree Name"}</h3>
            <ul>
              <li>{degreeDescribe || "Description of Your degree"}</li>
            </ul>
          </div>
        ))}


        <h2>Achievement & Certification</h2>
        {data?.aceivement?.map((achievement, index) => (
          <div key={index}>
            <ul>
              <li>{achievement || "Description of Achievement"}</li>
            </ul>
          </div>
        ))}
      </div>
      <div>
      <button className={styles.d_btn} onClick={generatePDF}>Download PDF</button>

      </div>

    
    </>
  );
};

export default Preview;
