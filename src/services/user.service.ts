import axios from "../core/axios";
import { User } from "../types/User";

class UserDataService {
  getAll() {
    return axios.get<Array<User>>("/users");
  }
}

export default new UserDataService();