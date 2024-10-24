import { Layout } from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>
    </QueryClientProvider>
  )
}
