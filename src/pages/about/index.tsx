import { NextPage } from "next";
import { GetServerSideProps } from "next";

const about: NextPage = () => {
  return null;
};

export default about;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/about/ntp-rubus",
      permanent: false,
    },
  };
};
