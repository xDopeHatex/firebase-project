import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.styles.scss";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getRedirectResult(auth);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />

      <SignUpForm />
    </div>
  );
};

export default Authentication;

{
  /* <button onClick={signInWithGoogleRedirect}>  Sign in with Google Redirect
      </button> */
}
