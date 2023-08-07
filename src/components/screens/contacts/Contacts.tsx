import { NextPage } from "next";
import styles from "./Contacts.module.scss";
import Contactcard from "@/components/ui/card/_contact/Contactcard";
import Feedback from "@/components/ui/feedback/Feedback";

const Contacts: NextPage = () => {
  return (
    <section className={styles.grid}>
      <Contactcard
        title="E-mail"
        description="Электронная почта"
        data="info@ntp-rubus.ru"
        href="mailto: info@ntp-rubus.ru"
        type="email"
      />
      <Contactcard
        title="Почтовый адрес"
        description="Нарьян-Мар"
        data="166700, Ненецкий АО, г.Нарьян-Мар, ул.Ленина, д.6, оф.1"
        href="https://yandex.com.ge/maps/-/CXaqNkd"
        type="email"
      />
      <Contactcard
        title="Офис"
        description="Ненецкий АО"
        data='Ненецкий АО, г.Нарьян-Мар, ул.Полярная, 35б'
        href="https://yandex.com.ge/maps/-/C2eF6er"
        type="location"
      />
      <Contactcard
        title="Офис"
        description="Воронеж"
        data="г.Воронеж, ул.Ушинского, 17"
        href="https://yandex.com.ge/maps/-/CXaqFgS"
        type="location"
      />
      <Contactcard
        title="Номер телефона"
        description="Рекультивация и проектирование"
        data="+7 (911) 585-25-52"
        href="tel: +79115852552"
        type="phone"
      />
      <Contactcard
        title="Номер телефона"
        description="Рекультивация и проектирование"
        data="+7 (911) 586-45-05"
        href="tel: +79115864505"
        type="phone"
      />
      <Contactcard
        title="Номер телефона"
        description="Озеленение и благоустройство"
        data="+7 (911) 068-21-37"
        href="tel: +79110682137"
        type="phone"
      />
      <Contactcard
        title="Номер телефона"
        description="Озеленение и благоустройство"
        data="+7 (911) 568-00-69"
        href="tel: +79115680069"
        type="phone"
      />
      <Contactcard
        title="Директор"
        description="На основании устава"
        data="Попов Алексей Иванович"
        type="employee"
      />
      <Contactcard
        title="Садовый центр"
        description="Смотрите карту"
        data="Ненецкий АО, рп. Искателей, Вертолётный проезд"
        href="https://yandex.com.ge/maps/-/CXauecQ"
        type="location"
      />
      <Feedback type="contacts" />
    </section>
  );
};

export default Contacts;
