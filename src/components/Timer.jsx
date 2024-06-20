import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTimer] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }

  }, []);

  const handleChange = ({target}) => {
    setName(target.value);
  }

  return (
    <>
      <h2>Sei su questa pagina da: {time}s</h2>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}
