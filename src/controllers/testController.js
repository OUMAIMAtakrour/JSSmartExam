const Test = require('../models/testModel');

exports.createTestForm = (req, res) => {
  res.render('pages/test/create', { error: null });
};

exports.createTest = async (req, res) => {
  const { testScore, idMentor } = req.body;

  try {
    await Test.createTest(testScore, idMentor);
    res.redirect('/test/success');
  } catch (error) {
    console.error('Error creating test:', error);
    res.render('pages/test/create', { error: 'Failed to create test' });
  }
};

exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.getAllTests();
    res.render('pages/test/index', { tests });
  } catch (error) {
    console.error('Error fetching tests:', error);
    res.status(500).send('Server error');
  }
};

exports.getTestById = async (req, res) => {
  const { id } = req.params;

  try {
    const test = await Test.getTestById(id);
    res.render('pages/test/edit', { test });
  } catch (error) {
    console.error('Error fetching test:', error);
    res.status(500).send('Server error');
  }
};

exports.updateTest = async (req, res) => {
  const { id } = req.params;
  const { testScore, idMentor } = req.body;

  try {
    await Test.updateTest(id, testScore, idMentor);
    res.redirect('/test');
  } catch (error) {
    console.error('Error updating test:', error);
    res.status(500).send('Server error');
  }
};

exports.deleteTest = async (req, res) => {
  const { id } = req.params;

  try {
    await Test.deleteTest(id);
    res.redirect('/test');
  } catch (error) {
    console.error('Error deleting test:', error);
    res.status(500).send('Server error');
  }
};