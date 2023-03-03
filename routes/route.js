const express = require('express')
const router = express.Router()
const methods = require('../controller/logic')

router.post('/add-expense',methods.addExpense)


router.get('/get-expense',methods.getExpense)

router.delete("/delete-expense/:id",methods.deleteExpense)




module.exports = router