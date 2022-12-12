import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const data = response.data.slip;
        setAdvice(data);
        console.log(data.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice.advice}</h1>
        <button className="button" onClick={() => fetchAdvice()}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
