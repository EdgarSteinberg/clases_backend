import mongoose from 'mongoose';


const studentCollection = "student";

const studentSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    gender: { type: String, enum: ["M", "F"] },
    grade: { type: Number, min: 0, max: 10 },
    group: { type: String, enum: ["1A", "1B"] }
});

const studen_model = mongoose.model(studentCollection, studentSchema);

export default studen_model;