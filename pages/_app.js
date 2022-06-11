import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/globals.css";

import SiteLayout from "@components/layout/SiteLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </>
  );
}

export default MyApp;
