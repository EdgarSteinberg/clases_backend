import { Router } from 'express';

class RouterBase {
    constructor() {
        this.router = Router();
        this.init();
    }


    getRouter() {
        return this.router;
    }

    init() { }

    get(path, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks));
    }

    post(path, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks));
    }

    put(path, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks));
    }

    delete(path, ...callbacks) {
        this.router.get(path, this.generateCustomResponses, this.applyCallbacks(callbacks));
    }

    applyCallbacks(callbacks) {
        return callbacks.map((callbacks) => async (...params) => {
            try {
                await callbacks.apply(this, params);
            } catch (error) {
                console.log(error);
                params[1].status(500).send(error);
            }
        });
    }


    generateCustomResponses(req, res, next) {
        res.sendSuccess = payload => res.send({ status: 'success', payload });
        res.sendServerError = error => res.status(500).send({ status: 'error', error });
        res.sendClientError = error => res.status(400).send({ status: 'error', error });

        next();
    }
}

export default RouterBase;