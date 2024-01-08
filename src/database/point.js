import { createRequire } from "module";
// import DB from "./db.json" assert { type: "json" }
import saveToDataBase from "./utils.js"
import crypto from "node:crypto"

const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB();

//creando mi propio require en EsModule
const require = createRequire(import.meta.url)
const DB = require("./db.json")
let data = DB.points

export const getAllPointsDB = async ({time}) => {
  try {
    if (time) {
      const filtered = await data.filter( point => point.time.toLocaleLowerCase() === time.toLocaleLowerCase())
      return {
        status:200,
        data: filtered
      }
    }
    //TODO: building a function 
    return {
      status:200,
      data
    }
  } catch (error){
    console.log("error", error);
    return {
      status : 500,
      data: error
    }
  }
};

export const getOnePointsDB = ( pointId ) => {
  return data.find( point => point.id === pointId )
};

export const createNewPointDB = ( body ) => {

  const payload = {
    id: crypto.randomUUID(),
    ...body,
    time: new Date().toISOString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

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

export const deleteOnePointDB = ( pointId ) => {
  const indexOfPoint = data.findIndex( element => element.id === pointId )
  if (indexOfPoint === -1) return "no existe"

  data.splice(indexOfPoint, 1)
  saveToDataBase(DB)
  return "Eliminado con éxito"
}