import React from "react";
import { useAccount } from "wagmi";

const Index = () => {
  const { address } = useAccount();

  return (
    <div>
      <div>Hello</div>
    </div>
  );
};

export default Index;
