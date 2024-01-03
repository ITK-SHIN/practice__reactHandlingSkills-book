import { useState } from "react";

const Say = () => {
  const [message, SetMessage] = useState("");
  const onClickEnter = () => SetMessage("안녕하세요!");
  const onClickLeave = () => SetMessage("안녕히 가세요!!");
  const onClickBack = () => SetMessage("다시 왔네요?");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button onClick={onClickBack}>재입장</button>

      <h1 style={{ color }}>{message}</h1>

      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        빨간색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파랑색
      </button>
    </div>
  );
};

export default Say;
