import React, { useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import axios from 'axios';



const Pokemon = () => {
    const [Allname] = useState(['Pikachu','Ivysaur','Venusaur','Wartortle','Charmander','Blastoise','Dugtrio','Golem','Rapidash','Hitmonlee','Gyarados','igglypuff','Ninetales','Gloom','Snorlax']);
    const [state, setstate] = useState('ditto');
    const [pokeImage, setPokeImage] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png');
    const [pokeName, setname] = useState("ditto");
    const [ability, setability] = useState('imposter');
    const [height, setheight] = useState('3');
    const [weight, setweight] = useState('40');
    const [moveslength, setmoveslength] = useState('40');
    const [moves, setmoveslist] = useState([{
            move : {name: "transform", url: "https://pokeapi.co/api/v2/move/144/"}
        }
        
    ]);



    useEffect(() => {
        async function getPokemon(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${state}`);

            
            setPokeImage(res.data.sprites.front_default);
            setname(res.data.name);
            setability(res.data.abilities[1].ability.name);
            setheight(res.data.height)
            setweight(res.data.weight);
            setmoveslength(res.data.moves.length);
            setmoveslist(res.data.moves);

            
        }

        getPokemon();
    },[state]);

    return <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 text-center">
                        <select className="mdb-select md-form"  onChange={(e) => setstate( (e.target.value).toLowerCase())}>
                            <option value="ditto" >Choose Your Pokemon Name For Details</option>
                            {
                                Allname.map((pokemonName) => {
                                    return <option key={pokemonName} value={pokemonName}>{pokemonName}</option>
                                })
                            }

                        </select>
                        <div className="card" style={{  backgroundColor:"#563d7c" }}>
                            <div className="text-center">
                                <img className="card-img-top img-fluid rounded" src={pokeImage} alt="pokemon" style={{ width:"166px", height:"auto" }} />
                                <h2 style={{ color : "rgb(236, 167, 29)" }} className="card-title text-uppercase">{pokeName}</h2>
                            </div>
                                
                            <div className="card-body">
                                
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><strong>Ability : </strong> {ability}</li>
                                    <li className="list-group-item"><strong>Total Moves : </strong> {moveslength}</li>
                                    <li className="list-group-item"><strong>Weight : </strong> {weight}</li>
                                    <li className="list-group-item"><strong>Height : </strong> {height}</li>
                                    <li className="list-group-item"><strong>List of Moves : {pokeName} pokemon </strong></li>
                                    {
                                        moves.map((move) => {
                                            return  <li className="list-group-item">{move.move.name}</li>
                                        })
                                    }
                                    
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                   <div className="col-2"></div>
                </div>
            </div> 
        </>
}

export default Pokemon;