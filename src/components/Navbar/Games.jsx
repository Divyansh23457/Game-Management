import React from 'react'
import GameCard from './GameCard';
function Games(props) {
    const arr = props.games !== null?props.games.filter(game => game.platform === props.platform):[];
  return (
    <div className = "mygamescontainer">
        {
        arr.map((game,idx)=>{
            return (
                <>
                <GameCard game= {game}/>
                </>
            );
        })
        }
    </div>
  )
}

export default Games
