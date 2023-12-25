import { createRequire } from "module";
// import DB from "./db.json" assert { type: "json" }
import saveToDataBase from "./utils.js"

//creando mi propio require en EsModule
const require = createRequire(import.meta.url)
const DB = require("./db.json")
let data = DB.points

export const getAllPointsDB = ( time ) => {
  if (time) 
    return data.filter( point => point.time.toLocaleLowerCase() === time.toLocaleLowerCase())

  return data;
};

export const getOnePointsDB = ( pointId ) => {
  return data.find( point => point.id === pointId )
};

export const createNewPointDB = ( payload ) => {
  //verificar si esta en la base de datos
  const isAlreadyAdded = data.findIndex( element => element.lat === payload.lat || element.long === payload.long )
  if ( isAlreadyAdded > -1 ) return "ya existe"
  data.push(payload)
  saveToDataBase( DB )
  return payload
}