import { getAllPointsService, getOnePointService, createNewPointService, updateOnePointService, deleteOnePointService} from "../services/pointServices.js"

export const getAllPoints =  async (req, res) => {
  const { time } = req.query
  const { status, data } = await getAllPointsService({ time })
	res.json({ status, data });
}

export const getOnePoint = async (req, res) => {
  const { pointId } = req.params
  const onePoint = await getOnePointService( pointId )
	res.json({status : 200, data: onePoint});
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

export const updateOnePoint = async (req, res) => {
  const { body, params: { pointId } } = req
  const updatedPoint = await  updateOnePointService({ pointId, body })
  res.json({ status: 200, data: updatedPoint})
  //si no quieres retornar el contenido utiliza un 204 No content indicando que la solicitud fue exitosa. 
}

export const deleteOnePoint = async (req, res) => {
  const { pointId } = req.params
  await deleteOnePointService( pointId)
  res.json({status: 204, data: "Elemento eliminado con éxito"})
}



