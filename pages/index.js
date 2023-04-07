import Head from 'next/head';
import ChatForm from '../components/ChatForm';
import ChatHistory from '../components/ChatHistory';

export default function Home() {
  return (
    <div className="container mx-auto my-4 max-w-4xl">
      <Head>
        <title>Hengshi Bot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome to Hengshi Bot
        </h1>
        <ChatHistory />
        <ChatForm />
      </main>

      <footer className="mt-8 text-center text-gray-400">
        Powered by Next.js, MongoDB, and OpenAI
      </footer>
    </div>
  );
}
