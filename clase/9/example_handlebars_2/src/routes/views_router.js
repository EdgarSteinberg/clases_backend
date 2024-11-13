import {Router} from 'express';

const router = Router();

const food = [
    {name: "Hamburguesa", price: "100"},
    {name: "Banana", price: "20"},
    {name: "Soda", price: "40"},
    {name: "Ensalada", price: "120"},
    {name: "Pizza", price: "150"},
];

router.get("/", (req,res) => {
    const testuser = {
        name : "Hilda",
        lastName: "Gutierres",
        role: "admin"
    }

    res.render(
        "index",
        {   
            style: 'index.css',
            title: "CoderHouse",
            user: testuser,
            isAdmin: testuser.role === "admin",
            food
        }
    )
});

export default router

