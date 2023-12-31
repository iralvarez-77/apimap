import { getAllPointsDB, getOnePointsDB, createNewPointDB, updateOnePointDB, deleteOnePointDB } from "../database/point.js"

export const getAllPointsService = async ({time}) => {
  return await getAllPointsDB({time})
}

export const getOnePointService = async( pointId ) => {
  return await getOnePointsDB( pointId )
}

export const createNewPointService = async (body) => {
  return await createNewPointDB( body )
}

export const updateOnePointService = ({...params}) => {
	return updateOnePointDB({...params})
}

export const deleteOnePointService = async ( pointId) => {
  return await deleteOnePointDB(pointId)
}



