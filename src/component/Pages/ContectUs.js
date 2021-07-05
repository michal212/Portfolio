import Input from "../Features/Input";
import { useEffect, useRef, useState } from "react";
import Button from "@material-ui/core/Button";
import "../../index.css";

export default function Form() {
  const [userForm, setUserForm] = useState({
    firstName: "first Name",
    lastName: "last Name",
    email: "email",
  });
  function setInputValue(e) {
    console.log(userForm);
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  }
  const foucsONinput = useRef();
  useEffect(() => {
    foucsONinput.current.focus();
  }, []);

  return (
    <div className="mainCointenerForm">
      <div className="formCon">
        <form className="form">
          <h2 id="formHeader">Contect Me</h2>
          <Input
            myref={foucsONinput}
            inputOnChange={setInputValue}
            placeholder="First Name"
            error={!userForm.firstName}
            inputType="text"
            inputName="firstName"
            inputValue={userForm.firstName}
          />
          <Input
            inputOnChange={setInputValue}
            error={!userForm.lastName}
            placeholder="Last Name"
            inputType="text"
            inputName="lastName"
            inputValue={userForm.lastName}
          />
          <Input
            inputOnChange={setInputValue}
            error={!userForm.email}
            placeholder="Email"
            inputType="email"
            inputName="email"
            inputValue={userForm.email}
          />
          <Button
            onClick={() => {
              const UserEmailMessage = `first name: ${userForm.firstName}, last name: ${userForm.lastName}, email: ${userForm.email}`;
              window.open(
                `mailto:michalfarada1997@gmail.com?subject=user_Portfolio_form&body=${UserEmailMessage}`
              );
            }}
            variant="outlined"
            style={{
              width: "300px",
              marginTop: "20px",
              height: "50px",
              background: "grey",
            }}
          >
            SEND
          </Button>
        </form>
        <div className="formImgDiv">
          <img className="formImg" src="./formImg.jpg"></img>
        </div>
      </div>
    </div>
  );
}
