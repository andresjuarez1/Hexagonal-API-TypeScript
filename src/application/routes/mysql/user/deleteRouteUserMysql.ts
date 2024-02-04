import express from 'express';
import { deleteUserMysql } from '../../../controllers/mysql/userControllerMysql/deleteControllerUserMysql';

const userDeleteRouterMysql = express.Router();

userDeleteRouterMysql.delete('/users/:id', deleteUserMysql);

export { userDeleteRouterMysql };
