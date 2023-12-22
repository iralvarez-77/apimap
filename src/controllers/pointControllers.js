import { getAllPointsService, getOnelPointService, createNewPointService, updateOnePointService, deleteOnePointService} from '../services/pointServices.js'


export const getAllPoints =  (req, res) => {
  const allPoints = getAllPointsService()
  console.log("aqui",allPoints);
	res.json("get all points");
}

export const getOnelPoint = (req, res) => {
	console.log(req.params.pointId);
	res.send("get an existing point");
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



