import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    { 
        name: { type: String, required: true },
        prompt: { type: String, required: true },
        photo: { type: String, required: true },
        author_id: { type: String, required: true},
        comments: [Object]
    }, 
    {
        timestamps: true
    }
)

const Post = mongoose.model('post', postSchema);

export default Post;