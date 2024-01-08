import { getAllPointsService, getOnePointService, createNewPointService, updateOnePointService, deleteOnePointService} from "../services/pointServices.js"

export const getAllPoints =  async (req, res) => {
  const { time } = req.query
  const { status, data } = await getAllPointsService({ time })
	res.json({ status, data });
}

export const getOnePoint = (req, res) => {
  const { pointId } = req.params
  const onePoint = getOnePointService( pointId )
	res.json({status : "OK", data: onePoint});
}

export const createNewPoint = async (req, res) => {
  const { lat, long } = req.body
  if ( !lat || !long ) return 
  
  const body = {
    lat,
    long
  }
  const newPoint = await createNewPointService(body)
  res.json({ status: 201, data: newPoint})
  //si el objeto existe retornar un 409 conflict 
}

export const updateOnePoint = (req, res) => {
  const { body, params: { pointId } } = req
  const updatedPoint = updateOnePointService({ pointId, body })
  res.json({ status: 200, data: updatedPoint})
  //si no quieres retornar el contenido utiliza un 204 No content indicando que la solicitud fue exitosa. 
}

export const deleteOnePoint =  (req, res) => {
  const {pointId } = req.params
  const deletedPoint = deleteOnePointService( pointId)
  res.json({status: 204, data: deletedPoint})
}



