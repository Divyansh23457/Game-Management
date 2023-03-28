import React, { useState , useEffect } from 'react'
import './navbar.css'
import Nintendo from './nintendologo.png';
import PS from './pslogo.jpg';
import Xbox from './xboxlogo.jpg';
import Games from './Games';

function Navbar() {
  const [platform,setPlatform] = useState("PC (Windows)");
  const [games, setGames] = useState(null);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2e052a6593msh2b2970db0f49c24p119847jsn329952413696',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  const getApiData = async() => {
		const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options).then((response) => response.json());
		setGames(response);
	  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
    <div className='navbar d-flex'>
        <div className='navbar-item title' id = "title">
            GameFlow<sup>©</sup>
        </div>
        <div className='navbar-item title' id = "home">
            Home    
        </div>
        <div className='navbar-item title' id = "platform">
            Platforms
        </div>
        <div className='navbar-item'>
          <div className="navbar-item box">
          <select id = "plat" defaultValue = "PC (Windows)" onChange={(e)=>setPlatform(e.target.value)}>
            <option value = "Any" >Platform</option>
            <option value = "PC (Windows)">PC (Windows)</option>
            <option value = "Web Browser">Web Browser</option>
          </select>
          </div>
        </div>
        <div className="navbar-item">
          <img className='imag1' src = {Nintendo} />
        </div>
        <div className="navbar-item">
          <img className = 'imag2' src = {PS} />
        </div>
        <div className="navbar-item">
          <img className = 'imag3' src = {Xbox} />
        </div>
        <Games games = {games} platform = {platform}/>
    </div>
    </>
  )
}

export default Navbar
