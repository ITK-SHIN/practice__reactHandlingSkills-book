import { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //ref를 설정할 부분

  //컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 처음으로 실행(2)
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  //컴포넌트가 마운트될 때와 업데이트될 때 호출 (3)
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    //조건에 따라 특정 값 동기화
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null; //state를 변경할 필요가 없다면  null 반환
  }

  // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행 (4)
  componentDidMount() {
    console.log('componentDidMount');
  }

  //props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드(5)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    //숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    return nextState.number % 10 !== 4;
  }

  //컴포넌트를 DOM에서 제거할 때 실행 (8)
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  //render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출 (6)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //이것은 리렌더링을 완료한 후 실행한다. (7)
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  // 컴포넌트 모양새를 정의(1)
  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}> 더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
