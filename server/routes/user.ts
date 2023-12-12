import express, { Request, Response } from 'express';

// Create a new router object
const router = express.Router();

// Define a route handler for GET requests to the root path ("/")
router.post('/register', (req, res) => {
  console.log(req.body);
  res.send("Success")   
});
router.post('/login', (req, res) => {
  console.log(req.body);
  res.send("Success")   
});


module.exports = router