import grpc from 'k6/net/grpc';
import { check, sleep } from 'k6';

export const options = {
  
    vus: 100,
    duration: '30s',
  
  };

const client = new grpc.Client();
client.load(['definitions'], 'test_data.proto');

export default () => {
  
    client.connect('localhost:9090', {plaintext: true,  reflect: true });

  const response = client.invoke('model.DataService/FindByCity', {city: 'Павлоград'});

  // check(response, {
  //   'status is OK': (r) => r && r.status === grpc.StatusOK,
  // });

  // console.log(JSON.stringify(response.message));

  client.close();
  sleep(1);
};