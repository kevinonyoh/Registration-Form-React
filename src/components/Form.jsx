import React from "react";
import Input from "./Input";
import Button from "./Button";
var userIsRegistered = false;

function ElementReturn(condition) {
  if (condition) {
    return (
      <div>
        <Input type="username" holder="username" />
        <Input type="password" holder="password" />
        <Button type="Login" />
      </div>
    );
  } else {
    return (
      <div>
        <Input type="username" holder="username" />
        <Input type="password" holder="password" />
        <Input type="password" holder="comfirm password" />
        <Button type="Register" />
      </div>
    );
  }
}

function Form() {
  return <form className="form">{ElementReturn(userIsRegistered)}</form>;
}

export default Form;
