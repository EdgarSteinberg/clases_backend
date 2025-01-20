import Order from '../dao/classes/orderDAO.js';
import User from '../dao/classes/userDAO.js';
import Business from '../dao/classes/businessDAO.js';

const orderService = new Order();
const userService = new User();
const businessService = new Business();

const responseError = {
    status: 'error',
    error: "Something went wrong, try again later"
};

const getOrders = async (req, res) => {
    const result = await orderService.getOrders();
    res.send({ status: "success", result });
};

const getOrderById = async (req, res) => {
    const { oid } = req.params;

    const result = await orderService.getOrderById(oid);
    if (!result) return res.status(500).send(responseError);

    res.send({ status: "success", result });
};

const createOrder = async (req, res) => {
    const { user, business, products } = req.body;

    if (!user || !business || !products) {
        return res.status(400).send({ status: 'error', error: 'Missing required fields' });
    }

    const resultUser = await userService.getUserById(user);
    const resultBusiness = await businessService.getBusinesById(business); // Corregido

    if (!resultUser || !resultBusiness) return res.status(500).send(responseError);

    const currentOrders = resultBusiness.products.filter(product => products.includes(product.id));

    const sum = currentOrders.reduce((acc, elem) => acc + elem.price, 0);

    const orderNumber = Date.now() + Math.floor(Math.random() * 10000 + 1);

    const order = {
        number: orderNumber,
        business,
        user,
        status: "Pending",
        products: currentOrders.map(product => product.id),
        totalPrice: sum
    };

    const orderResult = await orderService.createOrder(order); // Corregido

    if (!orderResult) return res.status(500).send(responseError);

    res.send({ status: "success", result: orderResult }); // Corregido
};

const resolverOrder = async (req, res) => {
    const { status } = req.body;
    const { oid } = req.params;

    if (!status) return res.status(400).send({ status: 'error', error: 'Status is required' });

    const order = await orderService.getOrderById(oid);
    if (!order) return res.status(500).send(responseError);

    order.status = status;

    const result = await orderService.resolveOder(order._id, order);
    if (!result) return res.status(500).send(responseError);

    res.send({ status: "success", result: "Order Resolved" }); // Corregido
};

export default { getOrders, getOrderById, createOrder, resolverOrder };
