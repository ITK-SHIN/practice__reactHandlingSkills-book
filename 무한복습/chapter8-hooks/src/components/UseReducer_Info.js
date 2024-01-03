import { useEffect, useReducer, useState } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const UseReducerInfo = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        UseReducer_Info
        <br />
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default UseReducerInfo;
