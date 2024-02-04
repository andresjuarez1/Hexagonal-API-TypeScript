import express from 'express';
import { createUserMysql } from '../../../controllers/mysql/userControllerMysql/createControllerUserMysql';

const userCreateRouterMysql = express.Router();

userCreateRouterMysql.post('/users', createUserMysql);

export { userCreateRouterMysql };
