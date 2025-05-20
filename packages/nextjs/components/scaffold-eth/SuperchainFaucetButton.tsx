"use client";

import Image from "next/image";
import opLogo from "../assets/optimism_logo.png";

/**
 * FaucetButton button which lets you grab eth.
 */
export const SuperchainFaucetButton = () => {
  const openSuperchainFaucet = () => {
    window.open("https://console.optimism.io/faucet", "_blank");
  };

  return (
    <div className={"ml-1"} data-tip="Grab funds from Superchain faucet">
      <button className="btn bg-base-100 btn-md rounded-full flex-nowrap" onClick={() => openSuperchainFaucet()}>
        <Image alt="Optimism Logo" src={opLogo.src} width={20} height={20} />
        Superchain Faucet
      </button>
    </div>
  );
};
