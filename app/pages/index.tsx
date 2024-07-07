"use client"
import type { NextPage } from 'next'
import Head from 'next/head'
import Stopwatch from '../components/stopwatch';


const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stopwatch</title>
        <meta name="description" content="A simple stopwatch built with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stopwatch />
    </div>
  );
};

export default Index;
