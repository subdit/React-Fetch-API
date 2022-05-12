import React from 'react';
import Button from './Button';

const Form = ({ reqType, setReqType }) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <Button buttonText='users' reqType={reqType} setRegType={reqType} />
      <Button buttonText='posts' reqType={reqType} setRegType={setReqType} />
      <Button buttonText='comments' reqType={reqType} setReqType={setReqType} />
    </form>
  );
};

export default Form;
