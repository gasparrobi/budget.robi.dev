import Head from 'next/head';
import Dashboard from '../components/Dashboard';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Személyes pénzügyi statisztikák (OTP)</title>
        <meta
          name="description"
          content="OTP Bank tranzakciók alapján generált statisztika"
        />

        <meta itemprop="name" content="Személyes pénzügyi statisztikák (OTP)" />
        <meta
          itemprop="description"
          content="OTP Bank tranzakciók alapján generált statisztika"
        />
        <meta itemprop="image" content="https://budget.robi.dev/og-image.jpg" />

        <meta property="og:url" content="https://budget.robi.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Személyes pénzügyi statisztikák (OTP)" />
        <meta
          property="og:description"
          content="OTP Bank tranzakciók alapján generált statisztika"
        />
        <meta property="og:image" content="https://budget.robi.dev/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Személyes pénzügyi statisztikák (OTP)" />
        <meta
          name="twitter:description"
          content="OTP Bank tranzakciók alapján generált statisztika"
        />
        <meta name="twitter:image" content="https://budget.robi.dev/og-image.jpg"></meta>

        <link rel="icon" href="/favicon.ico" />
        <script
          async
          defer
          data-website-id={process.env.STATS_WEBSITE_ID}
          src={process.env.STATS_URL}
        ></script>
      </Head>

      <Dashboard />
      <Faq />
      <Footer />

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
