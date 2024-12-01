import mongoose from "mongoose";

import studentModel from "./models/student_model.js";
import courseModel from "./models/course_model.js";

const enviroment = async () => {
    await mongoose.connect("mongodb://localhost:27017/class_16_population");

    // Insertando Data
    /* await studentModel.create({
        first_name: "Ilu",
        last_name: "Peña",
        email: "test@test.com",
        gender: "male"
    });

    await courseModel.create({
        title: "Diseño UI/UX",
        description: "NodeJS",
        difficulty: 5,
        topics: ["Figma", "Canvas", "Handlebars"],
        proffesor: "Edgar Steinberg"
    }); */

    //Insertando al estudiante el curso
    // const student = await studentModel.findOne({ _id: "67472b372582c51fdfa137e4" });

    // student.courses.push({ course: "67472b372582c51fdfa137e6" });

    // await studentModel.updateOne({ _id: "67472b372582c51fdfa137e4" }, student);



    const student = await studentModel.findOne({ _id: "67472b372582c51fdfa137e4" }).populate("courses.course");
    console.log(JSON.stringify(student,null,"\t"))
};


enviroment();