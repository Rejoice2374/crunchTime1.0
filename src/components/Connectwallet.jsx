import React from "react";
import imgPlaceholder from "../assets/signup.png";
// import { Link } from "react-router-dom";
import Meta from "../assets/MetaMask.svg";
import WalletConnect from "../assets/walletconnect.png";
import Coinbase from "../assets/coinbase.png";
// import styles from "../styles";

const ConnectWallet = () => {
  const connectWallet = () => {};

  return (
    <div>
      <section className="flex md:flex-row flex-col items-center self-stretch md:justify-normal justify-center lg:gap-[60px] md:gap-[40px]">
        <div className="lg:min-w-[690px] md:min-w-[397px] w-full max-w-[846px] lg:h-[691px] md:h-auto h-[232px] flex-1">
          <img
            src={imgPlaceholder}
            alt="Sign Up"
            className="w-full md:max-h-max max-h-[232px] object-cover"
          />
        </div>
        <div className="text-white flex flex-1 flex-col md:items-start items-center pt-[30px] pb-[40px] justify-center gap-[40px]">
          <div className="text-white flex flex-col items-start self-stretch gap-[20px] lg:w-[460px] md:w-[325px] w-[315px] font-work">
            <h2 className="flex-1 lg:leading-[56.1px] leading-[45.6px] lg:text-[51px] text-[38px] font-semibold ">
              Connect Wallet
            </h2>
            <p className="self-stretch lg:text-[22px] lg:leading-[35.2px] leading-[22.4px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div className="flex flex-col items-start lg:w-[330px] md:w-[325px] w-[315px] gap-[30px] font-work">
            {/* Wallet connection buttons */}
            <div className="flex flex-col items-start self-stretch gap-[15px]">
              <button
                type="button"
                onClick={connectWallet}
                className="flex self-stretch items-center bg-secondary border lg:h-[72px] h-[60px] border-button-hov rounded-[20px] gap-3 pe-5 ps-10 cursor-pointer "
              >
                <img
                  src={Meta}
                  alt="MetaMask"
                  className="lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] object-cover"
                />
                <p className="text-white text-[22px] font-semibold leading-[30.8px] font-work">
                  MetaMask
                </p>
              </button>
              <button
                type="button"
                onClick={connectWallet}
                className="flex self-stretch items-center bg-secondary border lg:h-[72px] h-[60px] border-button-hov rounded-[20px] gap-3 pe-5 ps-10 cursor-pointer "
              >
                <img
                  src={WalletConnect}
                  alt="WalletConnect"
                  className="lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] object-cover"
                />
                <p className="text-white text-[22px] font-semibold leading-[30.8px] font-work">
                  Wallet Connect
                </p>
              </button>
              <button
                type="button"
                onClick={connectWallet}
                className="flex self-stretch items-center bg-secondary border lg:h-[72px] h-[60px] border-button-hov rounded-[20px] gap-3 pe-5 ps-10 cursor-pointer "
              >
                <img
                  src={Coinbase}
                  alt="Coinbase"
                  className="lg:w-[40px] lg:h-[40px] w-[32px] h-[32px] object-cover"
                />
                <p className="text-white text-[22px] font-semibold leading-[30.8px] font-work">
                  Coinbase Wallet
                </p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectWallet;
