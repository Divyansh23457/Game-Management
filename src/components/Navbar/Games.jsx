import React from 'react'
import GameCard from './GameCard'
import './games.css'

function Games(props) {
    const arr = props.games !== null?props.games.filter(game => game.platform === props.platform):[];
  return (
    <div className = "mygamescontainer">
        {
        arr.map((game,idx)=>{
            return (
                <div key = {idx}>
                <GameCard game= {game}/>
                </div>
            );
        })
        }
    </div>
  )
}

export default Games
