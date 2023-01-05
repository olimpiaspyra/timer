import React, {useState, useEffect} from 'react';

import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';
import Button from './components/Button/Button';

const App = () => {
  const [time, setTime] = useState(0);
  const [isStopped, setIsStopped] = useState(true);

  useEffect(() => {
    let interval = null;
    if (!isStopped) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isStopped]);

  return (
    <Container>
      <Timer time={time} />
      <Button value={(e) => setIsStopped(false)}>start</Button>
      <Button value={(e) => setIsStopped(true)}>stop</Button>
      <Button value={(e) => setTime(time === 0)}>reset</Button>
    </Container>
  );
};

export default App;
