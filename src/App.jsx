import "./App.css";
import { useState } from "react";

//states  ที 2 อัน
// inputtext (change)
// showMessage (click)

function App() {
  const [showMessage, setShowMessage] = useState("Greeting Message");
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <div className="greeting-container">{showMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(e) => {
            setInputText(e.target.value); //e คือ paramiter ของ callback fn. ซึ่ง e.target.value คือการเข้าถึง value ที่ถูกปัอนมาใน input
          }}
          value={inputText} //เอา state มาเก็บ value ทีเราเข้าถึงไปจากบรรทัดบน
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setShowMessage(inputText); //ตั้ง re state showmessage ด้วยการ exicute fn. แล้วเข้าถึง ​state inputtext
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
