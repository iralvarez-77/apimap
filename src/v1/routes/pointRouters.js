import { Router } from 'express';
import { 
  getAllPoints, 
  getOnePoint, updateOnePoint, 
  createNewPoint, 
  deleteOnePoint } from '../../controllers/pointControllers.js';

const router = Router();

router.get( '/', getAllPoints );

router.get('/:pointId', getOnePoint);

router.post('/', createNewPoint);

router.patch('/:pointId', updateOnePoint);

router.delete('/:pointId', deleteOnePoint);




export default router; 
