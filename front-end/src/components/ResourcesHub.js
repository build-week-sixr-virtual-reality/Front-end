import React from 'react'
import {Route,Switch} from 'react-router-dom'
import FirstArticle from "./Articles/FirstArticle"
import SecondArticle from "./Articles/SecondArticle"
import ThirdArticle from "./Articles/ThirdArticle"
import FourthArticle from "./Articles/FourthArticle"
import Resources from './Resources'

export default function ResourcesHub(){
    return(
        <div>
            <Route exact path = "/dashboard/resources" component = {Resources} />
            <Switch>
                <Route exact path = "/dashboard/resources/a" component = {FirstArticle}  />
                <Route exact path = "/dashboard/resources/b" component = {SecondArticle} />
                <Route exact path = "/dashboard/resources/c" component = {ThirdArticle} />
                <Route exact path = "/dashboard/resources/d" component = {FourthArticle} />  
            </Switch>
        </div>
    )
}