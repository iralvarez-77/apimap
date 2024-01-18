import { createRequire } from "module";
import { docClient } from '../common/index.js';
import dayjs from 'dayjs';
import crypto from "node:crypto"
// import DB from "./db.json" assert { type: "json" }
// import saveToDataBase from "./utils.js"

//creando mi propio require en EsModule
const require = createRequire(import.meta.url)
const DB = require("./db.json")
let data = DB.points

export const getAllPointsDB = async ({time}) => {

  try {
    // if (time) {
    //   const filtered = await data.filter( point => point.time.toLocaleLowerCase() === time.toLocaleLowerCase())
    //   return {
    //     status:200,
    //     data: filtered
    //   }
    // }

    const params = {
      TableName: process.env.TABLENAME,
      Item: ""
    }
    //TODO: building a function 
    return {
      status:200,
      data
    }
  } catch (error){
    console.log("error", error);
    return {
      status : error.$metadata.httpStatusCode,
      data: error.name
    }
  }
};

export const getOnePointsDB = async( pointId ) => {
  // return data.find( point => point.id === pointId )
  const params = {
    TableName: process.env.TABLENAME,
    Key: {
      id: pointId
    },
    //returns a set of attributes
    // ProjectionExpression: "lat"
    //(strongly consistent)
    // ConsistentRead: true 
  }

  try {
    const response = await docClient.get(params)
    console.log("response:", response)
    return {
      status: 200,
      data : response.Item
    }
  } catch (error) {
    console.error("error", error)
    return {
      status: error.$metadata.httpStatusCode,
      data: error.name
    } 
  }
};

export const createNewPointDB = async ( body ) => {
  const now = dayjs().format();
  const payload = {
    // id: "2fe32c58-b800-42ba-8c6f-b480cd16ca54",
    id: crypto.randomUUID(),
    ...body,
    createdAt: now,
    updatedAt: now,
  }

  const params = {
    TableName: process.env.TABLENAME,
    Item: payload,
    ConditionExpression: 'attribute_not_exists(#pk)',
    ExpressionAttributeNames: { '#pk': 'id' },
    // ReturnValues: "ALL_OLD"
  }

try {
  const data = await docClient.put(params);
  console.log('Item creado con éxito:', data);
  return {
    status: 201,
    data : payload
  }
} catch (err) {
  console.error('Error al crear el item:', err);
  return {
    status: err.$metadata.httpStatusCode,
    data: err.name
  }
}
  //verificar si esta en la base de datos
  // const isAlreadyAdded = data.findIndex( element => element.lat === payload.lat || element.long === payload.long )
  // if ( isAlreadyAdded > -1 ) return "El recurso ya existe"
  // data.push(payload)
  // saveToDataBase( DB )
  // return payload
}

export const updateOnePointDB = async ({pointId, body }) => {
  const { lat, long } = body
  //verificar si esta en la base de datos
  // const isAlreadyAdded = data.findIndex( element => element.id === payload.pointId )
  //   if ( isAlreadyAdded === -1 ) return "Recurso no encontrado"

    const item = {
      TableName: process.env.TABLENAME,
      Key: {
        id: pointId,
      },
      UpdateExpression: "SET lat = :LAT, #lng = :LG, updatedAt = :now",
      ExpressionAttributeValues: {
        ":LAT": lat,
        ":LG": long,
        ":now": dayjs().format()
      },
      ExpressionAttributeNames: {"#lng": "long"},
      ConditionExpression: "attribute_exists(id)",
      ReturnValues: "ALL_NEW"
    }

    try {
      const data = await docClient.update(item)
      return {
        status: 200,
        data : data.Attributes
      }
    } catch (error) {
      return {
        status: error.$metadata.httpStatusCode,
        data: error.name
      }
    }
  
  //   const updatedPoint = {
  //     ...data[isAlreadyAdded],
  //     ...payload.body,
  //     updatedAt: dayjs().format()
  //   }
  //   console.log("🚀updatedPoint:", updatedPoint)

  //   data[isAlreadyAdded] = updatedPoint

  // saveToDataBase( DB )
  // return updatedPoint
}

export const deleteOnePointDB = async ( pointId ) => {
  const params = {
    TableName: process.env.TABLENAME,
    Key: {
      id : pointId
    },
    ConditionExpression: "attribute_exists(id)"
  }
  try {
    await docClient.delete(params)
    return {
      status: 204,
      data : "Elemento eliminado con éxito"
    }
  } catch (error) {
    console.error("er", error)
    return {
      status: error.$metadata.httpStatusCode,
      data: error.name
    }
  }
  // const indexOfPoint = data.findIndex( element => element.id === pointId )
  // if (indexOfPoint === -1) return "no existe"

  // data.splice(indexOfPoint, 1)
  // saveToDataBase(DB)
  // return "Eliminado con éxito"
}