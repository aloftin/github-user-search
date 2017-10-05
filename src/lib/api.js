import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';

export default class Api {
  static getUser(username) {
    return axios.get(`/users/${username}`);
  }

  static getPageOfFollowers(userId, currentPage) {
    return axios.get(`/user/${userId}/followers?page=${currentPage}`);
  }
}
