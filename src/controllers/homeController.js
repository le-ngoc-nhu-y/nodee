
import CRUDService from '../services/CRUDService.js'; // ✅ Correct way to import default export


const getHomePage = (req, res) => {
  res.render('homepage.ejs');
};

const getAboutPage = (req, res) => {
  res.render('about.ejs');
};

const getCRUD = (req, res) => {
  res.render('crud.ejs');
};

const postCRUD = async (req, res) => {
  try {
    const message = await CRUDService.createNewUser(req.body);
    return res.send('Post CRUD from server: ' + message);
  } catch (error) {
    console.error('Error in postCRUD:', error.message);
    return res.status(500).send('Error occurred.');
  }
};

const displayGetCRUD = async (req, res) => {
  try {
    let data = await CRUDService.getAllUser();
    console.log(data);
    return res.render('displayCRUD.ejs', { users: data }); // ✅ Pass data to view
  } catch (error) {
    console.error('Error fetching CRUD data:', error.message);
    return res.status(500).send('Error occurred.');
  }
};

export default {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
};
