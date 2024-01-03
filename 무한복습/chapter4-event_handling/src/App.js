import { Component } from "react";
import "./App.css";

import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

/* function App() {
  return (
    <div>
      <ValidationSample />
    </div>
  );
} */

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
