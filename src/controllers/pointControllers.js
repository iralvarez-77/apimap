import { getAllPointsService, getOnePointService, createNewPointService, updateOnePointService, deleteOnePointService} from "../services/pointServices.js"

export const getAllPoints =  (req, res) => {
  const { time } = req.query
  const allPoints = getAllPointsService(time)
	res.json({ status: "OK", data: allPoints });
}

export const getOnePoint = (req, res) => {
  const { pointId } = req.params
  const onePoint = getOnePointService( pointId )
	res.json({status : "OK", data: onePoint});
}

export const createNewPoint = (req, res) => {
  const { lat, long } = req.body
  if ( !lat || !long ) return 
  
  const body = {
    lat,
    long
  }
  const newPoint = createNewPointService(body)
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
	res.send("delete an existing point");
}



