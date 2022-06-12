import { Router } from 'express';
import { deleteTuna, getTuna, getTunas, getTunasCount, saveTuna } from '../controllers/tunas'

const router = Router();

router.get('/tunas', getTunas)

router.get('/tunas/count', getTunasCount)

router.get('/tunas/:id', getTuna)

router.post('/tunas', saveTuna)

router.delete('/tunas/:id', deleteTuna)

export default router;