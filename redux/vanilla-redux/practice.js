function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}

//화살표 함수로도 만들 수 있습니다.
const changeInput = (text) => ({
  type: "CHANGE_INPUT",
  text,
});

const initialState = {
  counter: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

const linstener = () => {
  console.log("상태가 업데이트됨");
};

const unsubscribe = store.subscribe(linstener);

unsubscribe();
