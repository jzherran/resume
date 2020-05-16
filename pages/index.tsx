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
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
    /*<Container className="p-3">
      <Head>
        <title>Résumé - jzherran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <h1 className="title">
            Jhonatan A. Zambrano Herran
          </h1>
        </Col>
      </Row>

      <Row>
        <Col>Experience</Col>
      </Row>

      <footer>
        <a
          href="https://github/jzherran"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by myself.
        </a>
      </footer>
    </Container>*/
  );
}
