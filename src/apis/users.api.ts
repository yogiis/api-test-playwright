import BaseApi from "@root/common/base-api";

class Users extends BaseApi {
  postUser(payload: any){
    return this.request.post('/v2/user', {
      data: payload
    });
  }

  getUser(username: string){
    return this.request.get(`/v2/user/${username}`);
  }
}

export default Users;
