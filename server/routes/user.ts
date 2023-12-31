import express, { Request, Response } from 'express';
import { prisma } from '../script';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new router object
const router = express.Router();

// Define a route handler for GET requests to the root path ("/")
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  // const salt = bcrypt.salt(10)
  // const hashedPassword = bcrypt.hash(password,salt)
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });
  return res
    .status(201)
    .send({ message: 'Account registered successfully', success: true });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    res.status(200).send({ message: 'User not exist', success: false });
    return;
  }
  const match = user?.password === password;
  if (!match) {
    res.status(200).send({ message: 'Password invalid', success: false });
    return;
  }
  // const token = jwt.signin({ userId: user?.id }, 'Secret');
  const token = user?.id;
  res.status(200).send({ message: 'Login Successfull', success: true, token });
  return;
});

module.exports = router;
