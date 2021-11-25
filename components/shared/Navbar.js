import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Logo from "./Logo";
import image from "../../public/image.jpg";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const Navbar = ({ signout }) => {
  const router = useRouter();
  const handleSignOut = () => {
    cookie.remove("token");
    //router.push("/login");
  };

  if (signout === false) {
    return (
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/login">
            <div className={styles.sign}>Sign in</div>
          </Link>
          <Link href="/">
            <div className={styles.registre}>Registre</div>
          </Link>
        </div>
        <div className={styles.nav}>
          <div>
            <ul className={styles.items}>
              <li className={styles.item}>
                <div className={styles.contain}>
                  <div className={styles.l1}>L</div>
                  <div className={styles.l2}>L</div>
                </div>
              </li>
              <li className={styles.item} style={{ marginLeft: "50px" }}>
                <a href="#">Home</a>
              </li>

              <li className={styles.item}>
                <a href="#">About us</a>
              </li>
              <li className={styles.item}>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className={styles.roundedlog}>
            <div>
              <Image
                src={image}
                width={50}
                height={50}
                className={styles.roundedImg}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link href="/login">
            <div className={styles.sign} onClick={handleSignOut}>
              Sign out
            </div>
          </Link>
        </div>
        <div className={styles.nav}>
          <div>
            <ul className={styles.items}>
              <li className={styles.item}>
                <div className={styles.contain}>
                  <div className={styles.l1}>L</div>
                  <div className={styles.l2}>L</div>
                </div>
              </li>
              <li className={styles.item} style={{ marginLeft: "50px" }}>
                <a href="#">Home</a>
              </li>

              <li className={styles.item}>
                <a href="#">About us</a>
              </li>
              <li className={styles.item}>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className={styles.roundedlog}>
            <div>
              <Image
                src={image}
                width={50}
                height={50}
                className={styles.roundedImg}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Navbar;
