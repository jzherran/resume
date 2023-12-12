import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');
        </style> 
      </Head>
      <section>
        <div className={utilStyles.content}>
          <h2>About</h2>
          <p>
            Systems engineer, passionate about software development, with eight
            years of experience in different positions related to design,
            implementation, and analysis of different software projects.
          </p>
          <p>
            Always in the search to learn and new professional and personal
            challenges, taking advantage of new projects being able to relate
            with people that I can help and learn from.
          </p>
          <p>
            Passionate about the topics about technology and development,
            contestant of programming marathons, and develop some different
            things in my free time.
          </p>
        </div>
        <div className={utilStyles.lineSeparator}></div>
      </section>
      <SpeedInsights />
    </Layout>
  );
}
