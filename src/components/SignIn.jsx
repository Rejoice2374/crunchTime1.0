import React from "react";
import imgPlaceholder from "../assets/signup.png";
import { Link } from "react-router-dom";
import styles from "../styles";

const SignUp = () => {
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
              Log In to your Account
            </h2>
            <p className="self-stretch lg:text-[22px] lg:leading-[35.2px] leading-[22.4px]">
              Welcome Back! Enter Your Details And Continue Creating, Collecting
              And Selling Nfts.
            </p>
          </div>
          <div className="flex flex-col items-start lg:w-[330px] md:w-[325px] w-[315px] gap-[30px] font-work">
            <form action="#">
              <div className="flex flex-col items-start self-stretch gap-[15px]">
                <div className="flex items-center bg-white border-coolAsh rounded-[20px] gap-3 h-[46px] px-5 py-4">
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    className="text-blackCeleste flex-1 border-0 h-[22px] leading-[22.4px] p-0 mb-[-3px] mt-[-5px] resize-none min-w-[275px]"
                  />
                </div>

                <div className="flex items-center bg-white border-coolAsh rounded-[20px] gap-3 h-[46px] px-5 py-4">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="text-blackCeleste flex-1 border-0 h-[22px] leading-[22.4px] p-0 mb-[-3px] mt-[-5px] resize-none min-w-[275px]"
                  />
                </div>
              </div>
            </form>
            <button
              type="submit"
              className={`${styles.button} ${styles.buttonHover} !h-[46px] !py-0 !px-[50px] justify-center w-[315px]`}
            >
              Log In
            </button>
            <p>
              I don't have an account?{" "}
              <Link to="/signup" className="underline hover:text-button">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
