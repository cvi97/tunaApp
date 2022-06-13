import { Router } from 'express';
import { deleteTuna, getTuna, getTunas, getTunasCount, saveTuna, deleteAllTunas } from '../controllers/tunas'

const router = Router();

router.get('/tunas', getTunas)

router.get('/tunas/count', getTunasCount)

router.get('/tunas/:id', getTuna)

router.post('/tunas/', saveTuna)

router.delete('/tunas/:id', deleteTuna)

router.delete('/tunas', deleteAllTunas)

export default router;