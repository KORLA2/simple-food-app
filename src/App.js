import React from 'react'
import Head from'./Head'
import Body from './Body'
import ContactUs from './Contact'
import AboutUs from './About'
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom'
let App=()=>{

    return (
<Router>
<Routes>
<Route path='/' element={  <>
<Head/>
        <Body/>
        </>}/>
        <Route path='/Contact US' element={<ContactUs/>}/>
        <Route path='/About US' element={<AboutUs/>}/>
     
</Routes>
</Router>
    )
}
export default App;
