import { getAllPointsService, getOnelPointService, createNewPointService, updateOnePointService, deleteOnePointService} from '../services/pointServices.js'


export const getAllPoints =  (_req, res) => {
  const allPoints = getAllPointsService()
	res.json({ status: "OK", data : allPoints});
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



