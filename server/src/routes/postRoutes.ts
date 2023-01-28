import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post';

dotenv.config();

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// GET All Posts
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Fetching posts failed, please try again',
    });
  }
});

// Create A Post
router.route('/').post(async (req: Request, res: Response) => {
  try {
    const { name, prompt, photo } = req.body;

    if (!name || !prompt || !photo) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a name, prompt, and photo',
      });
    }

    const photoUrl = (await cloudinary.uploader.upload(photo)).url;

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl,
    });

    res.status(200).json({ success: true, data: newPost });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Unable to create a post, please try again',
    });
  }
});

export default router;
