import { Router } from 'express';
import { deleteTuna, getTuna, getTunas, getNumerOfUsers, saveTuna, deleteAllTunas, getUsersTuna } from '../controllers/tunas'

const router = Router();

router.get('/tunas', getTunas)

router.get('/tunas/:tunaid/countofusers', getNumerOfUsers)

router.get('/tunas/:id', getTuna)

router.post('/tunas/', saveTuna)

router.delete('/tunas/:id', deleteTuna)

router.delete('/tunas', deleteAllTunas)

router.get('/tunas/:id/users', getUsersTuna)

export default router;