import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { User } from './components/User';
import { ReviewList } from './components/ReviewList/Review-list';
import { Review } from './components/Review/Review';

import {useState} from 'react'


function App() {
  const [CurrUser, setCurrUser] = useState("Bobby")

  return (
    <div className="App">
      <Header />
      <Nav />
      <User CurrUser={CurrUser}/>
      <Routes>
        <Route path="/" element={<ReviewList />} />
        {/* <Route path="/:username/:review_id" element={<Review />} /> */}
        {/* <Route path="/:username/info" element={<UserInfo/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
