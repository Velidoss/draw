import { Component, FC, ReactNode } from "react";
import {Layout} from "../components/Layout";
import '../styles/global.css';

type Props = {
  Component: FC;
  pageProps: Record<string, unknown>
}

export default function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}