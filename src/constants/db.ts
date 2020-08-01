export const tables: {users: string} = {
  users: process.env.DYNAMO_USERS_TABLE as string
};
