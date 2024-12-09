import bcrypt from 'bcrypt';

export const create_hash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValid_password = (user, password) => bcrypt.compareSync(password, user.password);