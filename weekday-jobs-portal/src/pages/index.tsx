import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Lexend_Giga } from "next/font/google";
import JobsFilter from "@/ui/components/JobsFilter";
import JobsList from "@/ui/components/JobsList";

const lexendGiga = Lexend_Giga({ subsets: ["latin"], weight : ["400","600","500"] });
export default function Home() {
  return (
    <>
      {/* Used for SEO optimisation  */}
      <Head>
        <title>Weekday Jobs</title>
        <meta
          name="description"
          content="Looking for opportunities? Use Weekday jobs to find thousands of job opportunities"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/weekday-works.appspot.com/o/referal-website-assets%2Ffavicon-64.png?alt=media"
        ></link>
      </Head>
      <main className={`${styles.main} ${lexendGiga.className}`}>
        <JobsFilter />
        <JobsList/>
      </main>
    </>
  );
}