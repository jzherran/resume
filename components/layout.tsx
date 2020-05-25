import Head from "next/head";
import Link from "next/link";
import styles from "../styles/layout.module.css";

export const name = "Jhonatan A. Zambrano H.";
export const siteTitle = "Résume - jzherran";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Resume created to show information about myself."
        />
        <meta name="rp:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={styles.topHeader}>
          <img src="/images/logo.svg" alt="jzherran" className={styles.logo} />
          <nav className={styles.navContainer}>
            <Link href="/">
              <a className="w-50">Home</a>
            </Link>
            <Link href="/">
              <a className="w-50">About</a>
            </Link>
          </nav>
        </div>
        <h1>- Title -</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
