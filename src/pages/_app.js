import "@/styles/globals.css";
import { createPublicClient, http } from "viem";
import { WagmiConfig, createConfig, sepolia } from "wagmi";

export default function App({ Component, pageProps }) {
  const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: sepolia,
      transport: http(),
    }),
  });

  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
