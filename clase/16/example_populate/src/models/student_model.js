import mongoose from 'mongoose';

const studentCollection = 'studen_16';

const studentSchema = new mongoose.Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    courses:{
        type: [
            {
                course: {
                    type:mongoose.Schema.ObjectId,
                    ref: "course_16"
                }
            }
        ],
        default: []
    }
});

const studenModel = mongoose.model(studentCollection,studentSchema);

export default studenModel;