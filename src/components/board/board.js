import React, { Component } from 'react';

import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Zoya the Destroya',
        img: 'img/250x180/1zoya.jpg',
        clicked: false
    },
    {
        name: 'Liberty Belle',
        img: 'img/250x180/2liberty.jpg',
        clicked: false
    },
    {
        name: 'Welfare Queen',
        img: 'img/250x180/3welfare.jpg',
        clicked: false
    },
    {
        name: 'Black Magic',
        img: 'img/250x180/5magic.jpg',
        clicked: false
    },
    {
        name: 'Macchu Piccu',
        img: 'img/250x180/4macchu.jpg',
        clicked: false
    },
    {
        name: 'Sheila the She-Wolf',
        img: 'img/250x180/6sheila.jpg',
        clicked: false
    },
    {
        name: 'Brittanica',
        img: 'img/250x180/7brittanica.jpg',
        clicked: false
    },
    {
        name: 'Beruit',
        img: 'img/250x180/8beruit.jpg',
        clicked: false
    },
    {
        name: 'Melrose',
        img: 'img/250x180/9melrose.jpg',
        clicked: false
    },
    {
        name: 'Vicky Vicking',
        img: 'img/250x180/10viking.jpg',
        clicked: false
    },
    {
        name: 'Bad Biddies',
        img: 'img/250x180/11biddies.jpg',
        clicked: false
    },
    {
        name: 'Fortune Cookie',
        img: 'img/250x180/12fortune.jpg',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <h4>Click every character only once. Once you click a character the grid will shuffle.<br/>
                 If you click the same character twice or the game will start over!</h4>
                <ScoreDisplay
                    score={this.state.user.score} />
                <div class="wrestler-area">
                <CharacterBox
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
                </div>
            </div>
        )
    }

}