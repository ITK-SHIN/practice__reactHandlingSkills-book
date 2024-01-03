//첫번쨰 복습

import { legacy_createStore as createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

//1. 액션 타입과 액션 생성 함수 정의하기
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//1-1. 액션 이름을 사용하여 액션 객체를 만드는 액션 생성 함수 작성하기
const toggleswitch = () => ({ type: "TOGGLE_SWITCH" });
const increase = (difference) => ({ type: "INCREASE", difference });
const decrease = () => ({ type: "DECREASE" });

//2. 초깃값 설정하기
const initialState = {
  toggle: false,
  counter: 0,
};

//3. 리듀서 함수 정의
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//4.  스토어 만들기
const store = createStore(reducer);
console.log(store);

//5. render 함수 만들기
const render = () => {
  const state = store.getState(); //현재 상태를 불러온다.

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

//6. 구독하기
const listener = () => {
  console.log("상태가 업데이트됨");
};
const unsubscribe = store.subscribe(listener);
//unsubscribe();

store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleswitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
