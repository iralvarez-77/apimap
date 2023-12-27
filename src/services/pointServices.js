import { getAllPointsDB, getOnePointsDB, createNewPointDB, updateOnePointDB } from "../database/point.js"


export const getAllPointsService =  (time) => {
  return getAllPointsDB(time)
}

export const getOnePointService = ( pointId ) => {
  return getOnePointsDB( pointId )

}

export const createNewPointService = (body) => {
  return createNewPointDB( body )
}

export const updateOnePointService = ({...params}) => {
	return updateOnePointDB({...params})
}

export const deleteOnePointService =  ( ) => {
  console.log("getAllPointsService");

}



