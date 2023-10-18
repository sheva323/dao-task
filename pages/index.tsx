import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { useAccount } from "wagmi";
import '../config/i18n'
import { useMutation } from '@apollo/client';
import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

import styles from "../styles/Home.module.css";
import Hero from '../components/home/Hero'
import Nav from "../components/general/Navbar";
import Features from "../components/home/Features";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount()
  const router = useRouter()
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>RainbowKit App</title>
          <meta
            content="Generated by @rainbow-me/create-rainbowkit"
            name="description"
          />
          <link href="/favicon.ico" rel="icon" />
        </Head>

        <main className={styles.main}>
          <Hero />
          <Features />
        </main>

        <footer className={styles.footer}>
          <a
            href="https://rainbow.me"
            rel="noopener noreferrer"
            target="_blank"
          >
            Made with ❤️ by Carla, Sandra & Sebas
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
