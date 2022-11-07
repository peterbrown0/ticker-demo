import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ReactTicker } from '@guna81/react-ticker'
import { getNewsData } from './ssg/fetch_data'
const renderItem = (item) => {
  return (
    <p style={{ whiteSpace: "nowrap", color: "#fff" }}>
      <a href={item.url} target="_blank">
        {item.title}
      </a>
    </p>
  );
};

export async function getStaticProps() {
  const newsData = await getNewsData();
  return { props: { newsData } };
}

export default function Home(newsData) {
  return (
    <div className={styles.container}>
      <ReactTicker
        data={newsData.newsData.articles}
        component={renderItem}
        speed={45}
        keyName="_id"
        tickerStyle={{
          position: "fixed",
          top: 0,
          left: "0",
          width: "100%",
          zIndex: 99,
        }}
        tickerClassName="news-ticker"
      />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
