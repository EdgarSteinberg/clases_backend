import bcrypt from 'bcrypt';

export const create_hash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};

export const isValid_password = (user, password) => {
    return bcrypt.compareSync(password, user.password)
};