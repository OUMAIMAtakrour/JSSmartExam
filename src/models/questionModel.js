const db = require("../config/database.js")

class qestionModel{

    static async getQestion() {
        
        return new Promise( resolve => {

            db.query(" SELECT * FROM question", (error, result) => {

                if (!error)
                resolve(result)

            });

        })
    }

    static async addQestion(text, score, id_level, susubject, id_media) {
        
        return new Promise(resolve => {

            db.query("INSERT INTO question (question_text, score, id_level, parent_subject_id, id_media) VALUES ($1, $2, $3, $4, $5);", [text, score, id_level, susubject, id_media], (error, result) => {
                
                if (!error) {
                    resolve(true);
                } else {
                    console.error("the error: ", error); 
                    resolve(false);
                }
            })
        })
    }

    static async deletQestion(id){

        return new Promise(resolve => {
            db.query("delete from question where question_id = $1", [id], (error, result) => {
                if (!error)
                resolve(true)
                else
                resolve(false)
            })
        })
    }

    static async updateQestion(text, score, id_level, susubject, id_media, id){
        return new Promise((resolve, reject) => {

            db.query(
                "UPDATE question SET question_text=$1, score=$2, id_level=$3, parent_subject_id=$4, id_media=$5 WHERE question_id = $6", 
                [text, score, id_level, susubject, id_media, id], 
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );


        })
    }

}

module.exports = qestionModel

