import { NextPage } from "next";
import styles from "./Navbar.module.scss";
import Route from "../route/Route";
import { getSections } from "@/contentful/nodes";
import { useEffect, useState } from "react";
import MenuRoute from "../menuroute/MenuRoute";

const Navbar: NextPage = () => {
  const [sections, setSections] = useState<any>([]);
  const [menu, setMenu] = useState(false);
  const [menuClass, setMenuClass] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data: any = await getSections();
      setSections(data.sections);
    };

    fetchData();
  }, []);

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  useEffect(() => {
    if (menu) {
      setTimeout(() => {
        setMenuClass(styles.open);
      }, 100);
    } else {
      setMenuClass("");
    }
  }, [menu]);

  return (
    <>
      <div className={styles.navbar}>
        {sections.map((section: any) => (
          <Route
            key={section.params.name}
            title={section.params.title}
            name={section.params.name}
            childs={section.params.name === "about" ? true : false}
          />
        ))}
      </div>
      <section className={styles.sidemenu}>
        <img src="/ui/icons/menu.svg" onClick={() => setMenu(true)} />
        {menu && (
          <>
            <div className={styles.back} onClick={() => openMenu()} />
            <div className={`${styles.menu} ${menuClass}`}>
              <section className={styles.data}>
                {sections.map((section: any) => (
                  <MenuRoute
                    key={section.params.name}
                    title={section.params.title}
                    name={section.params.name}
                    childs={section.params.name === "about" ? true : false}
                  />
                ))}
              </section>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Navbar;
