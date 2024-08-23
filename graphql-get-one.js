import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  
    vus: 100,
    duration: '30s',
  
  
  };


const query = `
  query OneById {
    oneById(id: "100") {
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


