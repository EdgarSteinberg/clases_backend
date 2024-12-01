import mongoose from 'mongoose';


const courseCollection = 'course_16';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    topics: {
        type: Array,
        default: []
    },
    proffesor: {
        type: String,
        required: true
    },
    students: {
        type: Array,
        default: []
    }
});


const courseModel = mongoose.model(courseCollection, courseSchema);

export default courseModel;