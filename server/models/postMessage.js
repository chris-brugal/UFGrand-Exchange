import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    wantedClass: String,
    description: String,
    name: String,
    creator: String,
    tags: [String],
    desiredSection: Number,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
