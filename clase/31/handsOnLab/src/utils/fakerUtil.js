import { fakerEN as faker } from '@faker-js/faker';

// Función para generar un código alfanumérico aleatorio
const generateAlphaNumericCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

export const generateUser = () => {
    let numOfProducts = faker.number.int({ min: 1, max: 7 });
    let products = [];

    // Asignar un rol aleatorio entre cliente y vendedor
    const roles = ['cliente', 'vendedor'];
    const role = roles[Math.floor(Math.random() * roles.length)];

    // Determinar si el usuario es premium
    const isPremium = Math.random() > 0.5; // 50% de chance de ser premium

    // Generar productos
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return {
        id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        sex: faker.person.sex(),
        birthDate: faker.date.birthdate(),
        phone: faker.phone.number(),
        products,
        image: faker.image.avatar(),
        email: faker.internet.email(),
        role,        // Rol de usuario (cliente o vendedor)
        isPremium,   // Si el usuario es premium
        occupation: faker.person.jobTitle()  // Título de ocupación laboral (nuevo método)
    }
}

export const generateProduct = () => {
    return {
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock: faker.number.int({ min: 0, max: 100 }),
        code: generateAlphaNumericCode(8), // Usar la función personalizada para generar código alfanumérico
        description: faker.lorem.sentence(), // Descripción breve del producto
        image: faker.image.url()
    }
}
