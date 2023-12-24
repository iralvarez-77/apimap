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
}

export const updateOnePoint = (req, res) => {
	res.send("update an existing point");
}

export const deleteOnePoint =  (req, res) => {
	res.send("delete an existing point");
}



