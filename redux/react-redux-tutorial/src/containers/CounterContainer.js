import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { useCallback } from 'react';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  console.log(number);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
/* const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
}; */

/* const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch) => ({
  //임시함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer); */

/* export default connect(
  (state) => ({
    number: state.counter.number,
  }),

  {
    increase,
    decrease,
  },
)(CounterContainer);
 */

export default CounterContainer;
