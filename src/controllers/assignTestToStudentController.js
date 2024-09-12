const assignTestToStudentModel = require("../models/assignTestToStudentModel")

class assignTestToStudentController{
    
    static async assignTest(req, res) {

        const {id_test, id_student, id_report} = req.body

        const result = await assignTestToStudentModel.assignTest(id_test, id_student, id_report)

        if(result)
        res.send("assined ssuccessfuly")
        else
        res.send("the test not assined")
    }
}

module.exports = assignTestToStudentController