import { object, string, integer } from 'superstruct';

export const postSuccessSchema = object({
  code: integer(),
  type: string(),
  message: string()
});

export const getSuccessSchema = object({
  id: integer(),
  username: string(),
  firstName: string(),
  lastName: string(),
  email: string(),
  password: string(),
  phone: string(),
  userStatus: integer()
});
