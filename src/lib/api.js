import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';

export default class Api {
  static getUser(username) {
    return axios.get(`/users/${username}`);
  }

  static getFollowers(username) {
    return axios.get(`/users/${username}/followers`);
  }

  static getPageOfFollowers(userId, page) {
    return axios.get(`/user/${userId}/followers?page=${page}`);
  }
}
