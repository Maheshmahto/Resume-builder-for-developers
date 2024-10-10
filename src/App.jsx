
import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Preview from './Components/Preview'
function App() {
  const [resumeData,setResumeData]=useState(null);
  const[checkbox,setCheckbox]=useState(false);

  const handleFormSubmit=(data)=>{
    setResumeData(data);
  };
  const checkBoxClicked=()=>{
    setCheckbox(!checkbox);
  }


  return (
    <>
    <h1 className='heading'> Resume Builder For Developers</h1>

     <div className='app-container'>
         <Form onSubmit={handleFormSubmit} checkClicked={checkBoxClicked}></Form>

       <Preview data={resumeData} checkbox={checkbox}></Preview>
     
     </div>
     <h4 className='heading'>Developed By Mahesh Mahto</h4>
     </>
   
  )
}

export default App
