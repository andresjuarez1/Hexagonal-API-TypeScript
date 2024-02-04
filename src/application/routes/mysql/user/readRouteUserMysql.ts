import express from 'express';
import { getAllUsersMysql } from '../../../controllers/mysql/userControllerMysql/readControllerUserMysql';

const userReadRouterMysql = express.Router();

userReadRouterMysql.get('/users', getAllUsersMysql);

export { userReadRouterMysql };
