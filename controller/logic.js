const expense = require('../models/dataModel')

exports.addExpense = async (req,res) => {
    try {
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;

        const data = await expense.create({
            amount:amount,
            description:description,
            category:category
        })
        res.json({newUser:data})



    } catch (err) {
        console.log("error in addexpense")
        res.json({Error:err})
    }
}


exports.getExpense = async (req,res) => {
    try {
        const data = await expense.findAll()
        res.json({allExpenses:data})


    } catch (err) {
        console.log("error in getexpense method")
        res.json({Error:err})
    }
}



exports.deleteExpense = async (req,res) => {
    try {
        const expenseId = req.params.id
        console.log(expenseId)
        const data = await expense.destroy({where:{id:expenseId}})
        res.json({deleted:data})
        

    } catch (err) {
        console.log("error in delete function")
        res.json({Error:err})
    }
}


