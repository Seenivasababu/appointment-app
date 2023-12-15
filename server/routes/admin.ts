import express, { Request, Response } from 'express';
import { prisma } from '../script';

const router = express.Router();

router.post('/approve/', async (req, res) => {
  const { receiverId, notId } = req.body;

  try {
    try {
      const notification = await prisma.notification.create({
        data: {
          type: 'Application status',
          message: `Your Doctor approval has been approved`,
          receiverId: parseInt(receiverId),
        },
      });
    } catch (error) {
      console.log(error);
    }
    try {
      await prisma.notification.delete({
        where: {
          id: notId,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return res
      .status(200)
      .send({ message: 'Application Status has been updated', success: true });
  } catch (error) {
    return res
      .status(200)
      .send({ message: 'Something went wrong', success: false });
  }
});

router.post('/reject', async (req, res) => {
  const { receiverId, notId } = req.body;

  try {
    try {
      const notification = await prisma.notification.create({
        data: {
          type: 'Application status',
          message: `Your Doctor approval has been rejected`,
          receiverId: parseInt(receiverId),
        },
      });
    } catch (error) {
      console.log(error);
    }
    try {
      await prisma.notification.delete({
        where: {
          id: notId,
        },
      });
    } catch (error) {
      console.log(error);
    }

    return res
      .status(200)
      .send({ message: 'Application Status has been updated', success: true });
  } catch (error) {
    return res
      .status(200)
      .send({ message: 'Something went wrong', success: false });
  }
});

module.exports = router