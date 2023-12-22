import { Router } from 'express';
import { getAllPoints, getOnelPoint, updateOnePoint, createNewPoint, deleteOnePoint } from '../../controllers/pointControllers.js';
const router = Router();

router.get( '/', getAllPoints );

router.get('/:pointId', getOnelPoint);

router.post('/', createNewPoint);

router.patch('/:pointId', updateOnePoint);

router.delete('/:pointId', deleteOnePoint);




export default router;
