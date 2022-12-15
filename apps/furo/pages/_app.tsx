import { WagmiConfig } from "wagmi";
import { client } from "@sushiswap/wagmi/client";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
};

export default MyApp;
