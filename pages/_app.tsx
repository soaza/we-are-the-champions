import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import React, { useState } from "react";

export const UserContext = React.createContext({
  refetchData: false,
  setRefetchData: (refetchData: boolean) => {},
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [refetchData, setRefetchData] = useState(true);
  const value = { refetchData, setRefetchData };

  return (
    <>
      <Head>
        <title>We are the Champions</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
        }}
      >
        <NotificationsProvider position="top-center" zIndex={2077}>
          <UserContext.Provider value={value}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </NotificationsProvider>
      </MantineProvider>
    </>
  );
}
