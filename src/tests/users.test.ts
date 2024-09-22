import { expect, test } from "@root/common/fixtures";
import Users from "@root/apis/users.api";
import { postSuccessSchema, getSuccessSchema } from "@root/schemas/users.schema";
import users from '@root/data/users.data';

test.describe('Test Case for Retrieving User Details', () => {
  users.createUserPayload.forEach(({id, username, firstName, lastName, email, password, phone, userStatus}) => {
    test(`Create User ${username} with name ${firstName} ${lastName}`, async ({ request }) => {
      const userApi = new Users(request);
      const createUserRequest = {
        id,
        username,
        firstName,
        lastName,
        email,
        password,
        phone,
        userStatus
      };
      const response = await userApi.postUser(createUserRequest);
      const responseJson = await response.json();
    
      expect(response.status()).toEqual(200);
      expect(responseJson).toHaveSchema(postSuccessSchema);
      expect(responseJson.message).toBe(`${id}`)
    });

    test(`Get User ${username} with name ${firstName} ${lastName}`, async ({ request }) => {
      const userApi = new Users(request);
    
      const response = await userApi.getUser(username);
      const responseJson = await response.json();
    
      expect(response.status()).toEqual(200);
      expect(responseJson).toHaveSchema(getSuccessSchema);
      expect(responseJson.id).toBe(id)
      expect(responseJson.username).toBe(username)
      expect(responseJson.firstName).toBe(firstName)
      expect(responseJson.lastName).toBe(lastName)
      expect(responseJson.email).toBe(email)
      expect(responseJson.password).toBe(password)
      expect(responseJson.phone).toBe(phone)
      expect(responseJson.userStatus).toBe(userStatus)
    });
  });
});
