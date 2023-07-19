import { useState, useContext } from "react";

import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";

import { UserContext } from "../../context/user.context";

import "./sign-in-form.styles.scss";

type defaultFormFieldsType = {
  email: string;
  password: string;
};

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] =
    useState<defaultFormFieldsType>(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser, currentUser } = useContext(UserContext);

  console.log(setCurrentUser, currentUser);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputData = event?.target as HTMLInputElement;

    const { name, value } = inputData;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (userCredential) {
        const { user } = userCredential;
        console.log(user);
        setCurrentUser(user);
      }
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password motherfucker");
          break;
        case "auth/user-not-found":
          alert("user not found motherfucker");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button buttonType="google" onClick={signInWithGoogle} type="button">
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
