import { useState } from "react";


export default function CounterPage() {
  const [counter, setCount] = useState(0);
  const addCounter = () => {
    setCount(counter + 1);
  };
  return (
            <div className="container text-center">
              <h2>Counter Page</h2>
              <p>Counter:{counter}</p>
              <button onClick={addCounter}>Increase</button>
            </div>
  );
}
