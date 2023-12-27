import { getAllPointsDB, getOnePointsDB, createNewPointDB, updateOnePointDB, deleteOnePointDB } from "../database/point.js"

export const getAllPointsService = async ({time}) => {
  return await getAllPointsDB({time})
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

export const deleteOnePointService =  ( pointId) => {
  return deleteOnePointDB(pointId)
}



