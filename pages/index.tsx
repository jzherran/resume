import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.content}>
          <h2>About</h2>
          <p>
            Systems engineer, passionate about software development, with eight
            years of experience in different positions related to design,
            implementation, and analysis of different software projects.
          </p>
          <p>
            Always in the search to learn and 9nd new professional and personal
            challenges, taking advantage of new projects being able to relate
            with people that I can help and learn from.
          </p>
          <p>
            Passionate about the topics about technology and development,
            contestant of programming marathons and application developer in my
            free time.
          </p>
        </div>
        <div className={utilStyles.lineSeparator}></div>
      </section>
    </Layout>
  );
}
