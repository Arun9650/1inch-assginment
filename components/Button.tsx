'use client'
import React from "react";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { Wallet } from "./icons";
import { getNetwork } from "wagmi/actions";
import { TokenData } from "./TokenData";

const Button = () => {
const { isConnected ,status} = useAccount();
const { openConnectModal } = useConnectModal();
const { chain } = getNetwork();


if (isConnected) {
    TokenData({ chain: chain?.id });
    return (
        <button className="w-full flex items-center justify-center gap-2 rounded-xl p-2 text-[#5599FF] bg-[#2f8bf53b] font-medium text-base ">
            Swap
        </button>
    );
}

  return (
    <button
      onClick={() => openConnectModal?.()}
      className="w-full flex items-center justify-center gap-2 rounded-xl p-2 text-[#5599FF] bg-[#2f8bf53b] font-medium text-base "
    >
      <Wallet />
      Connect Wallet
    </button>
  );
};

export default Button;
