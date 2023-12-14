import express, { Request, Response } from 'express';
import { prisma } from '../script';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from request parameters

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id, 10), // Assuming id is a number; convert to integer
      },
      include: {
        unSeenNotification: true,
      },
    });
    
    if (user) {
      console.log(user);
      
      return res.status(200).send(user);
    } else {
      return res
        .status(404)
        .send({ message: 'User not found', success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: 'Something went wrong', success: false });
  }
});

router.get('/unSeen/:id', async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from request parameters

    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id, 10), // Assuming id is a number; convert to integer
      },
      include: {
        unSeenNotification: true,
      },
     
    });
    
    if (user) {
      console.log(user.unSeenNotification);
      
      return res.status(200).send(user.unSeenNotification);
    } else {
      return res
        .status(404)
        .send({ message: 'User not found', success: false });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: 'Something went wrong', success: false });
  }
});

module.exports = router;
