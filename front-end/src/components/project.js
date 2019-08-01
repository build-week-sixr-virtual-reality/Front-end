import React, {useState} from "react";
import { Route }from "react-router-dom";
import ProjectFunding from "./projectFunding.js";
import ProjectStep1 from "./projectStep1.js";
import ProjectStep2 from "./projectStep2.js";
import ProjectStep3 from "./projectStep3.js";



function Project() {

    const [projects, setProjects] = useState([{id: "0", title: "test", description: "test", why: "test", impact: "test", amount: "$1", summary: "test", handles: "test"},]);

    const addProject = project => {
        setProjects([...projects, {...project, id: Date.now()}])
      }


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
          

        </div>
    )

}

export default Project;