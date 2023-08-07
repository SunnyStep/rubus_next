import Layout from "@/components/layout/index/Layout";
import Image from "next/image";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <Layout>
      <span className="notFound">
        <h1>404 — Страница не найдена</h1>
      </span>
    </Layout>
  );
};

export default NotFound;
