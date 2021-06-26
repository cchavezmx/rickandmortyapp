import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneCharacter } from 'redux/mortySlice'
import { useSelector, useDispatch } from 'react-redux'

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
      <div className="character--card--complete">
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
        <div>
            <p>{`Localización - ${character.location.name}`}</p>
        </div>
        <div>
        <p>{`Origen - ${character.origin.name}`}</p>
        </div>
        </div>
      </div>
  )
}


const Character = () => {

  const params = useParams()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getOneCharacter({ number: params?.number }))
  },[params, dispatch])

  const currentSearch = useSelector(state => state.app.getOneCharacter)

  return(
    <Fragment>
    <div className="flex--column">
        <h1>{ currentSearch.name }</h1>
      <div className="character--container">
        { Object.values(currentSearch).length > 0 && <CardCharacter character={currentSearch}/>}
      </div>
    </div>
    </Fragment>
  )
}


export default Character