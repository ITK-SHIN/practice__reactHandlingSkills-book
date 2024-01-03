import { Component } from "react";
import { PropTypes } from "prop-types";

class CMyComponent extends Component {
  static defaultProps = {
    name: "기본이름",
    age: 111,
  };

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
  };

  render() {
    const { name, children, age } = this.props;

    return (
      <div>
        나의 새롭고 멋진 컴포넌트 {name}
        <br />
        children 값은 {children} 입니다.
        <br />
        나이는 {age} 입니다.
      </div>
    );
  }
}

/* CMyComponent.defaultProps = {
  name: "기본이름",
  age: 111,
};

CMyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}; */

export default CMyComponent;
