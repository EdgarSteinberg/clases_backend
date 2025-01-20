import Business from '../dao/classes/businessDAO.js'

const businessService = new Business();

const responseError = {
    status: 'error',
    error: "Something went wrong, try again later"
}

const getBusiness = async (req, res) => {
    const result = await businessService.getBusines();

    res.send({ status: "success", result });
}

const getBusinessById = async (req, res) => {
    const { bid } = req.params;
    const result = await businessService.getBusinesById(bid);

    if (!result) return res.status(500).send(responseError);
    res.send({ status: "success", result  });
}

const createBusiness = async (req, res) => {
    const business = req.body;
    const result = await businessService.createBusiness(business);

    if (!result) return res.status(500).send(responseError);
    res.send({ status: "success", result });
}

const addProduct = async (req, res) => {
    const product = req.body;
    const { bid } = req.params;

    const business = await businessService.getBusinesById(bid);
    if (!result) return res.status(500).send(responseError);

    business.products.push(product);

    const result = await businessService.updateBusiness(business._id, business)


    if (!result) return res.status(500).send(responseError);
    res.send({ status: "success", result: "Busisness updated!" });
}


export default { getBusiness, getBusinessById, createBusiness, addProduct };