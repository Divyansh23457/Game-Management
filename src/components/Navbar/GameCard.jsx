import React from 'react'
import './gameCard.css'
import backimage from './gamecardbackground.jpg'
function GameCard(props) {
    return (
        <div className="game-card">
            <img src={props.game.thumbnail} alt="Game Thumbnail"/>
                <div className="game-details">
                    <h2 className="game-title">{props.game.title}</h2>
                    <p className="game-description">{props.game.short_description.slice(0,50) + "..."}</p>
                    <p className="game-developer">Developer: <span>{props.game.developer}</span></p>
                    <a href={props.game.game_url} target="_blank" className="play-now-btn">Play Now</a>
                </div>
        </div>
    )
}

export default GameCard;
