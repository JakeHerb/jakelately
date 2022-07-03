import { useEffect } from 'react';
import './Playground.css';
import Astronaut from './Astronaut';

function Playground() {

  const uselessFunction = () => { }

  useEffect(() => {
    uselessFunction();
  }, [])

  return (
    <div>
        <div className="container">
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
            <div className="child"></div>
        </div>
        <Astronaut />
    </div>
  )
}

export default Playground; 