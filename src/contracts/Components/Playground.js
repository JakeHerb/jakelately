import { useEffect } from 'react';
import './Playground.css';

function Playground() {

  const uselessFunction = () => { }

  useEffect(() => {
    uselessFunction();
  }, [])

  return (
    <div className="container">
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
        <div className="child"></div>
    </div>
  )
}

export default Playground; 