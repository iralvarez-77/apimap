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
  if ( isAlreadyAdded > -1 ) return "El recurso ya existe"
  data.push(payload)
  saveToDataBase( DB )
  return payload
}
export const updateOnePointDB = ( payload ) => {
  //verificar si esta en la base de datos
  const isAlreadyAdded = data.findIndex( element => element.id === payload.pointId )
    if ( isAlreadyAdded === -1 ) return "Recurso no encontrado"
  
    const updatedPoint = {
      ...data[isAlreadyAdded],
      ...payload.body,
      updatedAt: new Date()
    }
    console.log("🚀updatedPoint:", updatedPoint)

    data[isAlreadyAdded] = updatedPoint

  saveToDataBase( DB )
  return updatedPoint
}