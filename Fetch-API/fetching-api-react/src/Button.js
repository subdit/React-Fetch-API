import React from 'react';

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <Button
      className={buttonText === reqType ? 'selected' : null}
      type='button'
      onClick={() => setReqType(buttonText)}
    />
  );
};

export default Button;
