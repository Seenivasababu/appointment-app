import express, { Request, Response } from 'express';
import { prisma } from '../script';

const router = express.Router();

router.post('/approve/:id', async (req, res) => {
  console.log('approve enter');

  const { id } = req.params;
  try {
    try {
      const notification = await prisma.notification.create({
        data: {
          type: 'Application status',
          message: `Your Doctor approval has been approved`,
          receiverId: parseInt(id),
        },
      });
    } catch (error) {
      console.log(error, 'notifi');
    }
    try {
      const admin = await prisma.user.findFirst({
        where: {
          isAdmin: true,
        },
        select: {
          id: true,
        },
      });
      const update = await prisma.notification.delete({
        where: {
          id: admin?.id,
        },
      });
    } catch (error) {
      console.log(error,"admin");
      
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

router.post('/reject/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await prisma.notification.create({
      data: {
        type: 'Application status',
        message: `Your Doctor approval has been rejected`,
        receiverId: parseInt(id),
      },
    });
    const admin = await prisma.user.findFirst({
      where: {
        isAdmin: true,
      },
      select: {
        id: true,
      },
    });
    const update = await prisma.notification.delete({
      where: {
        id: admin?.id,
      },
    });

    return res
      .status(200)
      .send({ message: 'Application Status has been updated', success: true });
  } catch (error) {
    return res
      .status(200)
      .send({ message: 'Something went wrong', success: false });
  }
});

module.exports = router;