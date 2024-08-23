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

  const response = client.invoke('model.DataService/FindById', {id: 100});

  client.close();
  sleep(1);
};