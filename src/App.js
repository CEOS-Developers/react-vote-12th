import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    const getCandidate = async () => {
      const response = await axios.get(
        'http://ec2-3-34-5-220.ap-northeast-2.compute.amazonaws.com:2020/vote?id=1'
      );
      console.log('response : ', response);
    }

    getCandidate();
  });

  return (
    'hello'
  );
}

export default App;
