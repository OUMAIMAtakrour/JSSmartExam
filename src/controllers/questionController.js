const qestionModel = require("../models/questionModel")

class questionController{

    static async getAllQestion(req, res){
        let result = await qestionModel.getQestion();

        if (result)
            res.send(result)
    }

    static async setQestion(req, res){


        const {text, score, id_level, susubject, id_media } = req.body;            
            
        if (!text || !score || !id_level || !susubject || !id_media) {
            return res.status(400).send("Invalid input");
        }

        const result = await qestionModel.addQestion(text, score, id_level, susubject, id_media)

        if(result == true)
            res.render("./pages/login");
        else
        res.send("the qestion field")
    }

    static async deletQestion (req, res){

        const id = req.body.id;

        if (id) {
            const result = await qestionModel.deletQestion(id)

            if(result == true)
            res.send("question deleted successfully");
            else
            res.send("the qestion not delet")

        }
    }

    static async updateQestion(req, res){


        try {
            const { id, text, score, id_level, susubject, id_media } = req.body;            
            
            if (!id || !text || !score || !id_level || !susubject || !id_media) {
                return res.status(400).send("Invalid input");
            }    
            
            const result = await qestionModel.updateQestion(text, score, id_level, susubject, id_media, id);    
            
            if (result.rowCount > 0) {
                res.send("The question updated successfully");
            } else {
                res.status(404).send("The question was not found");
            }
        } catch (error) {
            console.error("Error updating question:", error);
            res.status(500).send("An error occurred while updating the question");
        }

    }

}

module.exports = questionController


