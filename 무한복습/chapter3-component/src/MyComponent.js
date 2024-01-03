import { PropTypes } from "prop-types";
import React from "react";

const MyComponent = ({ name, children, age, key }) => {
  return (
    <div>
      나의 새롭고 멋진 컴포넌트 {name}
      <br />
      children 값은 {children} 입니다.
      <br />
      나이는 {age} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
  age: 21,
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  children: PropTypes.string,
};

export default MyComponent;
