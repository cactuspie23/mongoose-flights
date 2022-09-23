import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', flightsCtrl.index)

export {
  router
}
