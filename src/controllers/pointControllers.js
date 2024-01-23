import { getAllPointsService, getOnePointService, createNewPointService, updateOnePointService, deleteOnePointService } from "../services/pointServices.js"

export const getAllPoints =  async (req, res) => {
  const { time } = req.query
  const { status, data } = await getAllPointsService({ time })
	res.json({ status, data });
}

export const getOnePoint = async (req, res) => {
  const { pointId } = req.params
  const { status, data } = await getOnePointService( pointId )
	res.send({status, data});
}

export const createNewPoint = async (req, res) => {
  const { lat, long } = req.body
  if ( !lat || !long ) return 
  
  const body = {
    lat,
    long
  }
  const { status, data } = await createNewPointService(body)
  res.json({status, data})
  //si el objeto existe retornar un 409 conflict 
}

export const updateOnePoint = async (req, res) => {
  const { body, params: { pointId } } = req
  const { status, data } = await  updateOnePointService({ pointId, body })
  res.json({ status, data })
  //si no quieres retornar el contenido utiliza un 204 No content indicando que la solicitud fue exitosa. 
}

export const deleteOnePoint = async (req, res) => {
  const { pointId } = req.params
  const {status, data} = await deleteOnePointService( pointId )
  res.json({ status, data })
}



