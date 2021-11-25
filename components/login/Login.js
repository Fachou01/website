import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import styles from "../../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Login = () => {
  const [msgError, setMsgError] = useState(false);
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    const response = await axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    });
    console.log(response);
    if (
      response.data.message === "Failed" ||
      response.data.message === "user not found !"
    ) {
      setMsgError(true);
    }
    if (response.data.message === "Succes") {
      cookie.set("token", JSON.stringify(response.data.token));
      router.push("/home");
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    //validationSchema,
    //validate,
  });

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.sections}>
          <div className={styles.check}>
            <FontAwesomeIcon
              icon={faCheckCircle}
              className={styles.fas}
              style={{ color: "#9e964a" }}
            />
          </div>
          <Link href="/">
            <div className={styles.reg}>
              <div className={styles.fa2}>
                <FontAwesomeIcon icon={faUserPlus} className={styles.fas} />
              </div>
              <span className={styles.regG}>Registre</span>
              <p>You can registre</p>
            </div>
          </Link>
          <div className={styles.reg1}>
            <div className={styles.fa2}>
              <FontAwesomeIcon icon={faDoorOpen} className={styles.fas} />
            </div>
            <span className={styles.regG}>Log in</span>
            <p>You can log in</p>
          </div>
          <form onSubmit={formik.handleSubmit}>
            {msgError ? <div>Email or password are invalid !</div> : null}
            <div className={styles.cont}>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={styles.inp}
                placeholder="Email*"
                required
              />
            </div>
            <div className={styles.cont}>
              <input
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={styles.inp}
                placeholder="Password*"
                required
              />
            </div>

            <div className={styles.cont1}>
              <input type="submit" className={styles.btn} value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
