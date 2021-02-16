import axios from 'axios';

const instance = axios.create({
  timeout: 1000,
  validateStatus: function validateStatus(status) {
    let server = status >= 200 && status < 300;
    let extra = status == 404 || status == 400 ;
    return server || extra;
  },
});

export default instance;
