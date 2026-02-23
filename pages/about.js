import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function About({ globalData }) {
  return (
    <Layout>
      <SEO title={`About | ${globalData.name}`} />
      <Header name={globalData.name} />
      <main className="w-full max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-lg mb-4">
          Hi, I'm Margot — an entrepreneur and sustainability advocate 
          graduating from Syracuse University's Whitman School of Management 
          in May 2026 with a minor in the iSchool in Information Technology: Innovation, Design, and Startups.
        </p>
        <p className="text-lg mb-4">
          This blog is where I explore everything from scientific innovations 
          to ethical discussions, with a focus on the intersection of 
          technology, business, and our future.
        </p>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}
