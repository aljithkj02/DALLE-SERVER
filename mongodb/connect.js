import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

const connectDB = (url) => {
    mongoose.connect(url)
    .then(() => {
        console.log('MongoDB Connected');
    }).catch((err) => {
        console.log(err.message);
    })
}

export default connectDB;