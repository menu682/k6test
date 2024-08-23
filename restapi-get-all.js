import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  
  vus: 1,
  duration: '30s',

  // stages: [
  //   { duration: '30s', target: 20 },
  //   { duration: '1m30s', target: 10 },
  //   { duration: '20s', target: 50 },
  // ],

};


export default function() {
  http.get('http://localhost:8080/api/all');
  sleep(1);
}
