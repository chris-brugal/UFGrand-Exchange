import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()

        res.status(200).json(postMessages); 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
};

export const createPost = async (req, res) => {
    const { creator, wantedClass, description, tags, desiredSection } = req.body;

    const newPostMessage = new PostMessage({ creator, wantedClass, description, tags, desiredSection })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).message('No post with that id exists.');
    
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, id }, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).message('No post with that id exists.');

    await PostMessage.findByIdAndRemove(id);

    res.json({message: 'deletion complete'})
}