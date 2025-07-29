
import Head from 'next/head';
import Home from '@/components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>Bilancio</title>
      </Head>
      <main className="container">
        <Home />
      </main>
    </>
  );
}
