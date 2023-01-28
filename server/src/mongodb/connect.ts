import mongose from 'mongoose';

const connectDB = (url) => {
  mongose.set('strictQuery', true);

  mongose
    .connect(url)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDB;
