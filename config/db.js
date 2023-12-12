import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://awais:19ntu1151@todo-app.nsjx3hg.mongodb.net/");
    console.log(`Connected to MongoDB at ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
  }
};

export default connectDB;
