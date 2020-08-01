import db from '..';
import userSchema from '../schemas/user';
import {tables} from '../../constants/db';

const User = db.model(tables.users, userSchema);

export default User;
