import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

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
