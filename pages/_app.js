import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/Layout";
import LoadingScreen from "../components/LoadingScreen";
import React from "react";
import { Router } from "next/router";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  // const [loading, setLoading] = useState();

  // Router.events.on("routeChangeStart", (url) => {
  //   console.log("Router is changing");
  //   setLoading(true);
  // });

  // Router.events.on("routechangeComplete", (url) => {
  //   console.log("Router is complete");
  //   setLoading(false);
  // });

  return (
    <>
      {/* {loading ? (
        <LoadingScreen />
      ) : ( */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* )} */}
    </>
  );
}

export default MyApp;
