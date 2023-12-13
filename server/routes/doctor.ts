import express, { Request, Response } from 'express';
import { prisma } from '../script';

const router = express.Router();

router.post('/apply', async (req, res) => {
  const data = req.body;
  try {
    const user = await prisma.form.create({
      data: {
        ...data,
        phoneNumber: Number(data.phoneNumber),
        fees: Number(data.fees),
      },
    });
  } catch (error) {
    return res
      .status(200)
      .send({ message: 'Application registration failed', success: false });
  }

  return res
    .status(201)
    .send({ message: 'Application registered successfully', success: true });
});

router.get('/listAll', async (req, res) => {
  try {
    const data = await prisma.form.findMany();
    return res.status(200).send(data);
  } catch (error) {
    return res
      .status(200)
      .send({ message: 'Something went wrong', success: false });
  }
  
});

module.exports = router;
