import React from 'react'
import {Route,Switch} from 'react-router-dom'
import FirstArticle from "../Articles/FirstArticle"
import SecondArticle from "../Articles/SecondArticle"
import ThirdArticle from "../Articles/ThirdArticle"
import FourthArticle from "../Articles/FourthArticle"
import AdminResources from './AdminResources.js'

export default function AdminResourcesHub(){
    return(
        <div>
            <Route exact path = "/admin/resources" component = {AdminResources} />
            <Switch>
                <Route exact path = "/admin/resources/a" component = {FirstArticle}  />
                <Route exact path = "/admin/resources/b" component = {SecondArticle} />
                <Route exact path = "/admin/resources/c" component = {ThirdArticle} />
                <Route exact path = "/admin/resources/d" component = {FourthArticle} />  
            </Switch>
        </div>
    )
}