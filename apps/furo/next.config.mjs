// import { ChainId } from '@sushiswap/chain'
import transpileModules from "next-transpile-modules";

const withTranspileModules = transpileModules(["@sushiswap/wagmi"]);

// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withTranspileModules(nextConfig);
