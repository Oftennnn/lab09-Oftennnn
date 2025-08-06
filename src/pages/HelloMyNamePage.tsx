import { useState } from "react";
export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [result, setResult] = useState("Please insert your name");
  const [isGreeted, setisGreeted] = useState(false);
  const nameInput = (event : any ) => {
    setName(event.target.value);
  };
  const greetClick = () => {
    if (name == "") {
      setResult("Please insert your name");
      setisGreeted(false);
    }else {
    setResult(`Hello ${name}`);
    setisGreeted(true);
  }
  }
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInput}
        value = {name}
        
      />
      <button className="btn btn-primary" onClick={greetClick}>Greet Me</button>
      {/* Result Text */}
      <p className={isGreeted? "" : "text-danger"}>{result}</p>
    </div>
  );
}
