import express from 'express';
import { updateUserMysql } from '../../../controllers/mysql/userControllerMysql/updateControllerUserMysql';

const userUpdateRouterMysql = express.Router();

userUpdateRouterMysql.put('/users/:id', updateUserMysql);

export { userUpdateRouterMysql };
