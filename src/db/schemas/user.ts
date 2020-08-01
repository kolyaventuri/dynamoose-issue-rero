import {v1 as uuidv1} from 'uuid';
import db from '..';

export default new db.Schema({
  id: {
    type: String,
    default: () => uuidv1(),
    hashKey: true
  },
  username: String
}, {
  timestamps: true
});
