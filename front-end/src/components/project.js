import React, {useState} from "react";
import { Route }from "react-router-dom";
import ProjectFunding from "./projectFunding.js";
import ProjectStep1 from "./ProjectSteps/projectStep1.js";
import ProjectStep2 from "./ProjectSteps/projectStep2.js";
import ProjectStep3 from "./ProjectSteps/projectStep3.js";
import ProjectSubmitted from "./ProjectSteps/projectSubmitted.js";



function Project({setDashBoardProjects, dashBoardProjects, projects, setProjects}) {

    const addProject = project => {
        setProjects([...projects, {...project, id: Date.now()}])
        
      }
      setDashBoardProjects(projects);
      
    
    const [stepOne, setStepOne] = useState({
        title: "",
        description: "",
        why: "",
        impact: "",
        amount: "",
        summary: "",
        handles: ""

    })

    return (
        <div>
            <Route exact path ="/dashboard/funding" render = {props => {
               return <ProjectFunding {...props} projects = {projects} key = {stepOne.id} />
            }} />
            <Route exact path ="/dashboard/funding/step1" render = {props => {
              return  <ProjectStep1 {...props} setStepOne = {setStepOne} stepOne = {stepOne} />
            }} />
            <Route exact path ="/dashboard/funding/step2" render = {props => {
              return  <ProjectStep2 {...props} setStepOne = {setStepOne} stepOne = {stepOne} />
            }} />
            <Route exact path ="/dashboard/funding/step3" render = {props => {
              return  <ProjectStep3 {...props} setStepOne = {setStepOne} stepOne = {stepOne} setProjects = {setProjects} submitProject = {addProject}/>
            }} />
            <Route exact path ="/dashboard/funding/submitted" component = {ProjectSubmitted} />
          

        </div>
    )

}

export default Project;