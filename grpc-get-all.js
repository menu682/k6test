import { grpc, Client, Stream } from 'k6/net/grpc';
import { sleep } from 'k6';

export const options = {
  
    vus: 1,
    duration: '30s',
  
  };

const client = new Client();
client.load(['definitions'], 'test_data.proto');

export default () => {
  
    if (__ITER == 0) {
        client.connect('localhost:9090', {plaintext: true,  reflect: true });
    }

    const stream = new Stream(client, 'model.DataService/FindAll', null);

    stream.write({});

    // stream.on('data', function (data) {
    //     console.log(data);
    //   });


};