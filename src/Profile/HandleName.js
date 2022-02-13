import React from "react";

const HandleName = () => {
  const Welcome = (props) => {
    return (
      <div>
        console.log(`props:`, props.name); return (
        <button onClick={() => props.alertMyInput(`My name is James Brown `)}>
          ClickMe
        </button>
        );
      </div>
    );
  };
};

export default HandleName;
