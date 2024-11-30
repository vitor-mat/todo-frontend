import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { SecurityProvider } from "../components/securityProvider";
import { UserProvider } from "../context/user";
import { GlobalStyle } from "../styles/GlobalStyle";

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SecurityProvider>
        <UserProvider>
          <>
            <GlobalStyle />
            <Component {...pageProps} />
          </>
        </UserProvider>
      </SecurityProvider>
    </QueryClientProvider>
  );
}
