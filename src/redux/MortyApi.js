import { request } from './utils'

const rndInt = Math.floor(Math.random() * 6) + 1
const baseURL = "https://rickandmortyapi.com/api/character/"

class MortyApi {
  static getDashBoardInfo(){
    const url = baseURL + "?page=" + rndInt
    return request(url)
  }
  static getCharacterByName(keyword){
    const url = baseURL + "?name=" + keyword
    return request(url)
  }
  static getOneCharacter(number){
    const url = baseURL + number
    return request(url)
  }


}

export default MortyApi