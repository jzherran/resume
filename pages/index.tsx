import Head from "next/head";
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>- Content -</p>
      </section>
    </Layout>
  );
}
