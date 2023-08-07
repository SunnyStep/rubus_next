import { NextPage } from "next";
import Link from "next/link";
import styles from "./Header.module.scss";
import Navbar from "./navbar/Navbar";

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img src="/logo.svg" alt="logo" />
      </Link>
      <Navbar />
      <Link href="/contacts" className={styles.contactbtn}>
        Связаться с нами <img src="/ui/icons/link.svg" alt="" />
      </Link>
    </header>
  );
};

export default Header;
