import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import SlideFade from "../components/chakra/transition";

export default function Home() {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(false);

  async function getDailyPic() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=W9fV7Ta5iozkM1D0xBuOMmJzVmhAw0cG2COghDFr"
      );
      setPlanet(response.data);
      console.log(response.data);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDailyPic();
  }, []);

  if (loading) {
    return <p> Loading... </p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Universium</title>
        <meta name="Universium" content="The website of the universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>Universium!</a>
        </h1>
        <h1 className={styles.title}>{planet?.title}</h1>
        <Image src={planet?.url} height={500} width={500} alt="pic" />
        <SlideFade isOpen={true} content={planet?.explanation} />
      </main>

      <footer className={styles.footer}>
        <p>Created by:</p>
        <a
          href="https://github.com/juliorochafilho"
          target="_blank"
          rel="noopener noreferrer"
        >
          Julio Rocha
        </a>
      </footer>
    </div>
  );
}
