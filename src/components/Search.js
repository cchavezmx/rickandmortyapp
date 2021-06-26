import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterByName } from 'redux/mortySlice'


const Search = () => {

  const dispach = useDispatch()
  const [ keyword, setKeyword ] = useState("")

  useEffect(() => {
    dispach(getCharacterByName({ keyword }))
  },[keyword, dispach])

  return(
    <div>
      <input className="search--bar" placeholder="Busca tu personaje favorito" value={keyword} onChange={(e) =>  setKeyword(e.target.value)}></input>
    </div>
  )
}

export default Search