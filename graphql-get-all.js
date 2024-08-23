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


const query = `
  query AllData {
    allData {
        id
        name
        email
        phoneNumber
        address
        city
        createdAt
    }
}
`;

const headers = {
  'Content-Type': 'application/json',
};


export default function() {
  http.post('http://localhost:8080/graphql',
    JSON.stringify({ query }),
    { headers },
  );
  sleep(1);
}


