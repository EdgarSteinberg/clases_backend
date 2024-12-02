import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const studentCollection = "student";

const studentSchema = new mongoose.Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    gender: { type: String, enum: ["M", "F"] },
    grade: { type: Number, min: 0, max: 10 },
    group: { type: String, enum: ["1A", "1B"] }
});

studentSchema.plugin(mongoosePaginate);

const studen_model = mongoose.model(studentCollection, studentSchema);

export default studen_model;