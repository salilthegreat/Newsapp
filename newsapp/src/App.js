import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY
  const [progress, setprogress] = useState(0)
  const changeLoading = (progress) => {
    setprogress(progress)
  }
  return (
    <div>
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News changeLoading={changeLoading} apiKey={apiKey} key="Home" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route exact path="/general" element={<News changeLoading={changeLoading} apiKey={apiKey} key="general" pageSize={pageSize} country={"in"} category={"general"} />} />
          <Route exact path="/science" element={<News changeLoading={changeLoading} apiKey={apiKey} key="science" pageSize={pageSize} country={"in"} category={"science"} />} />
          <Route exact path="/business" element={<News changeLoading={changeLoading} apiKey={apiKey} key="business" pageSize={pageSize} country={"in"} category={"business"} />} />
          <Route exact path="/entertainment" element={<News changeLoading={changeLoading} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={"in"} category={"entertainment"} />} />
          <Route exact path="/health" element={<News changeLoading={changeLoading} apiKey={apiKey} key="health" pageSize={pageSize} country={"in"} category={"health"} />} />
          <Route exact path="/sports" element={<News changeLoading={changeLoading} apiKey={apiKey} key="sports" pageSize={pageSize} country={"in"} category={"sports"} />} />
          <Route exact path="/technology" element={<News changeLoading={changeLoading} apiKey={apiKey} key="technology" pageSize={pageSize} country={"in"} category={"technology"} />} />
        </Routes>

      </Router>
    </div>
  )
}


export default App