import { getAllPointsDB, getOnePointsDB } from '../database/point.js'

export const getAllPointsService =  () => {
  return getAllPointsDB()
}

export const getOnePointService = ( pointId ) => {
  return getOnePointsDB( pointId )

}

export const createNewPointService = ( ) => {
  console.log("getAllPointsService");

}

export const updateOnePointService = ( ) => {
  console.log("getAllPointsService");
	
}

export const deleteOnePointService =  ( ) => {
  console.log("getAllPointsService");

}



