import {
  Chain,
  configureChains,
  createClient,
  CreateClientConfig,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { publicProvider } from "wagmi/providers/public";

import { mainnet } from "wagmi/chains";

export type Client = ReturnType<typeof createClient>;

const { chains, provider }: CreateClientConfig & { chains: Chain[] } =
  configureChains([mainnet], [publicProvider({})]);

export const client: Client = createClient({
  provider,
  // webSocketProvider,
  logger: {
    warn: null,
  },
  autoConnect: false,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        shimDisconnect: true,
      },
    }),
  ],
});
