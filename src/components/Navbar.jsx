import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import Logo from "../assets/Logo.png";
// import User from "../assets/user@2x.svg";
import { Link } from "react-router-dom";
import constants from "../constants";
import styles from "../styles";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { inAppWallet, createWallet } from "thirdweb/wallets";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Navlinks = constants.Navlinks;

  const client = createThirdwebClient({
    clientId: "9f74c96770178cb905cce2a3f1a6b9ae",
  });

  const wallets = [
    inAppWallet({
      auth: {
        options: [
          "google",
          "discord",
          "telegram",
          "farcaster",
          "email",
          "x",
          "passkey",
          "phone",
        ],
      },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
  ];

  return (
    <nav className="text-white px-[50px] py-[20px] flex justify-between items-center">
      <a href="/">
        <div className="brand flex flex-row gap-2.5 items-center">
          <img src={Logo} alt="Logo" className="md:w-[32px] w-[24px]" />
          <h2 className="text-[24px] font-bold font-work">One Of Wun</h2>
        </div>
      </a>
      <div className="lg:flex hidden font-semibold font-work gap-3">
        <ul className="list-none flex justify-end items-center flex-1 gap-2">
          {Navlinks.map((n) => (
            <li key={n.id} className={`${styles.buttonHover} p-[16px]`}>
              <Link to={`/${n.path.toLowerCase()}`}>{n.title}</Link>
            </li>
          ))}
        </ul>
        <ConnectButton
          client={client}
          wallets={wallets}
          connectModal={{ size: "compact" }}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="mobile flex flex-1 justify-end items-center lg:hidden">
        {toggleMenu ? (
          <FiX
            className="text-3xl cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <FiMenu
            className="text-3xl cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <ul className="flex flex-col gap-2 items-center absolute top-[80px] right-0 bg-secondary z-10 w-full p-[20px]">
            {Navlinks.map((n) => (
              <li key={n.id} className="p-[16px]">
                <Link to={`/${n.path.toLowerCase()}`}>{n.title}</Link>
              </li>
            ))}
            <ConnectButton
              client={client}
              wallets={wallets}
              connectModal={{ size: "compact" }}
            />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
