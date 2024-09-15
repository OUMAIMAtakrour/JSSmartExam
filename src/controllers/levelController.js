const path = require('path');
const ejs = require('ejs');
const { getLevels, getLevelById, createLevel, deleteLevel, updateLevel } = require('../models/levelModel');


const getAllLevels = async (req, res) => {
    try {
        const levels = await getLevels();
        
        const body = await ejs.renderFile(path.join(__dirname, '../../views/pages/levels.ejs'), { levels, title: 'All Levels' });
        res.render('layout', { title: 'Levels List', body });
    } catch (err) {
        console.error('Error fetching levels:', err);
        res.status(500).send('Error fetching levels');
    }
};


const addNewLevel = async (req, res) => {
    const { levelName, description, minScore, maxScore } = req.body;

    try {
        
        await createLevel(levelName, description, minScore, maxScore);

        
        res.redirect('/levels');
    } catch (err) {
        console.error('Error creating level:', err.message);
        res.status(500).send('Error creating level');
    }
};

const removeLevel = async (req, res) => {
    const levelId = req.params.id;

    try {
        await deleteLevel(levelId);
        res.redirect('/levels'); 
    } catch (err) {
        console.error('Error deleting level:', err.message);
        res.status(500).send('Error deleting level');
    }
};
const renderEditLevelForm = async (req, res) => {
    const levelId = req.params.id;
    try {
        const level = await getLevelById(levelId);
        if (!level) {
            return res.status(404).send('Level not found');
        }
        res.render('pages/edit-level', { level });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching level');
    }
};



const editLevel = async (req, res) => {
    const levelId = req.params.id;
    const { levelName, Description, minScore, maxScore } = req.body;
    
    console.log(req.body);  
    
    try {
        await updateLevel(levelId, levelName, Description, minScore, maxScore);
        res.redirect('/levels');
    } catch (err) {
        console.error('Error updating level:', err.message);
        res.status(500).send('Error updating level');
    }
};



module.exports = {
    getAllLevels,
    addNewLevel,
    removeLevel,
    renderEditLevelForm,
    editLevel
    
};









