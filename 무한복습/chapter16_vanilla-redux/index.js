// 23. 9.8(금) 복습x2

import { legacy_createStore as createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 1. 액션 타입  정의
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

//1.1 액션 생성 함수 정의 -> 액션 객체 반환
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 2. 초깃값 설정
const initialState = {
  toggle: false,
  counter: 0,
};

// 3. 리듀서 함수 정의
function reducer(state = initialState, action) {
  console.log(state);
  //action.type에 따라 다른 작업을 처리함
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

// 4. 스토어 만들기
const store = createStore(reducer);

// 5. render 함수 만들기  -> 상태가 업데이트 될 때마다 호출
const render = () => {
  const state = store.getState(); //현재 상태를 불러온다.

  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// 6. 구독하기  -> 액션이 디스패치되어 상태가 업데이트될 때마다 호출
store.subscribe(render);

// 6. 구독하기  -> 액션이 디스패치되어 상태가 업데이트될 때마다 호출
const listener = () => {
  console.log("상태가 업데이트됨");
};

const unsubscribe = store.subscribe(listener);
//unsubscribe();

//액션 발생시키기
//1.  dispatch 함수를 통해 리듀서 함수를 실행해서 새로운 상태를 만든다.
//2. 만든 상태를 스토어에게 전달

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
