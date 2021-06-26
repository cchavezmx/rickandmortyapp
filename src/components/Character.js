import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CardCharacter = ({ character }) => {

  const isAlive = ({ estado } = {}) => {
    if(estado === "Alive"){
      return <p className="is--alive">{" "}</p>
    }else if(estado === "Dead"){
      return <p className="is--dead"></p>
    }else{
    return <p className="unknown"></p>
  }
  }

  return (
    <Link to={`/character/${character.id}`}>
      <div className="character--card">
        <div className="character--card--left">
          <img src={character.image}  alt={character.title} />
        </div>
        <div className="character--card--right">
          <h4>{character.name}</h4>
          <div className="character--status">
            {
              isAlive({ estado: character.status })
            }
            <p>{`${character.status} - ${character.species}`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}


const Character = () => {

  const currentSearch = useSelector(state => state.app.getCharacterByName)
      
  return(
    <Fragment>
    <div className="flex--column">
        <h1>Personajes</h1>
      <div className="character--container">
        { Object.values(currentSearch).length > 0 && currentSearch.map((item, index) => <CardCharacter character={item} key={index} />) }
      </div>
    </div>
    </Fragment>
  )
}


export default Character