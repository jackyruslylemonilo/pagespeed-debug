import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../src/components/Header'), {
  ssr: false
});

function HomePage() {
  return (
    <>
      <Header />
      <div>Welcome to Next.js!</div>
    </>
  );
}

export default HomePage;
