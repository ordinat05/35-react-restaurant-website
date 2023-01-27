import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg';
// import Logo from '../assets/hamburgerlogo.png';


function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
      🍀 This Component Home.jsx
      <div className="headerContainer">
        <h1>
          Burger 55
        </h1>
        <p>Delicious Hamburgers <br /> with 33 Spicy Mixed </p>
        <Link to="/menu">
          <button>Order Now</button></Link>

      </div>
    </div>
  )
}

export default Home
