import { getAllPointsDB, getOnePointsDB, createNewPointDB, updateOnePointDB } from "../database/point.js"
import crypto from "node:crypto"

export const getAllPointsService =  (time) => {
  return getAllPointsDB(time)
}

export const getOnePointService = ( pointId ) => {
  return getOnePointsDB( pointId )

}

export const createNewPointService = (body) => {

  const payload = {
    id: crypto.randomUUID(),
    ...body,
    time: new Date().toISOString(),
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  return createNewPointDB( payload )
}

export const updateOnePointService = ({...params}) => {

	return updateOnePointDB({...params})
}

export const deleteOnePointService =  ( ) => {
  console.log("getAllPointsService");

}



