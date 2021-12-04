import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router,
Routes,
Route,
Link,
} from 'react-router-dom'
import { Header } from '../components/header/Header';
import { HomePage } from '../pages/main-page/HomePage';

export const MainRouter = () => {
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/home" element={ <HomePage /> }/>
        </Routes>
    </Router>

  )
}
