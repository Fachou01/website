import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import styles from "../../styles/Registre.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/router";

const Registre = () => {
  const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const onSubmit = async (values) => {
    /*const information = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      repeatPassword: values.repeatPassword,
    };
    console.log(information);*/
    const response = await axios.post("http://localhost:3001/registre", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });
    console.log(response);
    router.push("/login");
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
          <div className={styles.reg}>
            <div className={styles.fa2}>
              <FontAwesomeIcon icon={faUserPlus} className={styles.fas} />
              {/*<i className="fas fa-user-plus"></i>*/}
            </div>
            <span className={styles.regG}>Registre</span>
            <p>You can registre</p>
          </div>
          <Link href="/login">
            <div className={styles.reg1}>
              <div className={styles.fa2}>
                <FontAwesomeIcon icon={faDoorOpen} className={styles.fas} />
              </div>
              <span className={styles.regG}>Log in</span>
              <p>You can log in</p>
            </div>
          </Link>
          <form onSubmit={formik.handleSubmit}>
            <div className={styles.cont}>
              <input
                id="firstName"
                type="text"
                className={styles.inp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                style={{ width: "45%", outline: "none", marginLeft: "1rem" }}
                name="firstName"
                required
                placeholder="First Name*"
              />
              <input
                type="text"
                id="lastName"
                className={styles.inp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                style={{ width: "45%", outline: "none", marginLeft: "1rem" }}
                name="lastName"
                required
                placeholder="Last Name*"
              />
            </div>
            <div className={styles.cont}>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.inp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email*"
                required
              />
            </div>
            <div className={styles.cont}>
              <input
                id="password"
                type="password"
                name="password"
                className={styles.inp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password*"
                required
              />
            </div>
            <div className={styles.cont}>
              <input
                id="repeatPassword"
                type="password"
                name="repeatPassword"
                className={styles.inp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatPassword}
                placeholder="Repeat Password*"
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

export default Registre;
