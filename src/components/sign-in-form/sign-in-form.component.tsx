import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button from "../button/button.component";

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
    await signInWithGooglePopup();
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

      // if (userCredential) {
      //   const { user } = userCredential;

      // }
      resetFormFields();
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
