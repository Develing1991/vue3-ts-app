import axios from 'axios';

export class Axios {
  private static instance: any;
  constructor() {
    Axios.instance = axios.create({
      // baseURL: '/api'
    });
  }
  public static getInstance() {
    if (!Axios.instance) {
      Axios.instance = new Axios();
    }
    return Axios.instance;
  }
}
