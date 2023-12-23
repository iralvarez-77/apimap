import { getAllPointsService, getOnePointService, createNewPointService, updateOnePointService, deleteOnePointService} from '../services/pointServices.js'

export const getAllPoints =  ( req, res) => {
  const { time } = req.query
  console.log(time);
  // const allPoints = getAllPointsService()
	res.json({ status: "OK" });
}

export const getOnePoint = (req, res) => {
  const { pointId } = req.params
  const onePoint = getOnePointService( pointId )
	res.json({status : "OK", data: onePoint});
}

export const createNewPoint = (req, res) => {
	res.send("create a new point");
}

export const updateOnePoint = (req, res) => {
	res.send("update an existing point");
}

export const deleteOnePoint =  (req, res) => {
	res.send("delete an existing point");
}



