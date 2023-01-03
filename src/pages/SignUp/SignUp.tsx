import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

import styles from './SignUp.module.scss';


export const SignUp = () => {

  const {
    register,
    watch,
    formState: {errors, isValid},
    handleSubmit,
    reset,
  } = useForm<Inputs>({
    mode: "onBlur",
  });

  type Inputs = {
    userName: string,
    userEmail: string,
    userPassword: string,
    confirm_userPassword: string,
  };

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.backToHome}>Back to home</h4>
      <h1 className={styles.title}>Sign Up</h1>
      <form className={styles.form}>
        <div className={styles.form__inputContainer}>
          <h3 className={styles.inputContainer__title}>Name</h3>
          <input className={styles.inputContainer__input}
                 {...register("userName", {
                   required: 'The field is required',
                   minLength: {
                     value: 3,
                     message: 'Please enter at least 3 characters'
                   }
                 })}
                 type="text"
                 placeholder="Your name"
                 // value={userName}
                 // onChange={(event) => userNameHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userName && <p>{errors?.userName?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.form__inputContainer}>
          <h3 className={styles.inputContainer__title}>Email <span>*</span></h3>
          <input className={styles.inputContainer__input}
                 {...register("userEmail", {
                   required: 'The field is required',
                   pattern: {
                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                     message: "invalid email address"
                   },
                   minLength: {
                     value: 5,
                     message: 'Please enter at least 5 characters'
                   }
                 })}
                 type="email"
                 placeholder="Your email"
                 // value={userEmail}
                 // onChange={(event) => userEmailHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userEmail && <p>{errors?.userEmail?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.form__inputContainer}>
          <h3 className={styles.inputContainer__title}>Password <span title="Must contain at least one number and
          one uppercase and lowercase letter, and at least 8 or more characters">*</span></h3>
          <input className={styles.inputContainer__input}
                 {...register("userPassword", {
                   required: 'The field is required',
                   pattern: {
                     value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/g,
                     message: "invalid password address"
                   },
                   minLength: {
                     value: 6,
                     message: 'Please enter at least 6 characters'
                   }
                 })}
                 type="password"
                 placeholder="Your password"
                 // value={userPassword}
                 // onChange={(event) => userPasswordHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.userPassword && <p>{errors?.userPassword?.message || 'Error!'}</p>}
          </div>
        </div>
        <div className={styles.form__inputContainer}>
          <h3 className={styles.inputContainer__title}>Confirm password <span title="Must contain at least one
          number and one uppercase and lowercase letter, and at least 8 or more characters">*</span></h3>
          <input className={styles.inputContainer__input}
                 {...register("confirm_userPassword", {
                   required: 'The field is required',
                   validate: (val: string) => {
                     if (watch('userPassword') != val) {
                       return "Your passwords do no match";
                     }
                   },
                   minLength: {
                     value: 6,
                     message: 'Please enter at least 6 characters'
                   }
                 })}
                 type="password"
                 placeholder="Confirm  password"
                 // value={confirmUserPassword}
                 // onChange={(event) => confirmUserPasswordHandler(event)}
          />
          <div className={styles.input__errors}>
            {errors?.confirm_userPassword && <p>{errors?.confirm_userPassword?.message || 'Error!'}</p>}
          </div>
        </div>
        <button className={styles.form__button}
                disabled={!isValid}
                type="button"
                // onClick={() => handleRegister(userEmail, userPassword)}
        >Sign up</button>
        <div className={styles.form__signUp}>Already have an account? <Link to={'/signIn'}>Sign In</Link></div>
      </form>
    </div>
  );
};