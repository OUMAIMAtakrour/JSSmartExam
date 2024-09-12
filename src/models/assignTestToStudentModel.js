const db = require("../config/database.js")

class assignTestToStudentModel{

    static async assignTest(id_test, id_student, id_report){
        return new Promise ( (resolve, reject) => {

            db.query("INSERT INTO assignement (id_test, id_student, id_report) VALUES ($1, $2, $3)", [id_test, id_student, id_report], (e, r) => {
                if (!e)
                    resolve(r)
                else
                    reject(e)
            })
        })
    }
}

module.exports = assignTestToStudentModel