import React from "react";
import LoginButton from "../components/LoginButton";
import LocalLoginButton from '../components/LoginButton'; 

export const LoginPage = () => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="bg-[url(/images/sport-tools.jpeg)] bg-cover bg-[50%_50%] w-[1440px] h-[1024px]">
        <div className="relative w-[990px] h-[623px] top-[193px] left-[219px] bg-[#d9d9d9cd] rounded-[61px]">
          <div className="absolute w-[938px] h-[81px] top-[76px] left-[19px]">
            <div className="absolute text-[#e36d00] text-6xl text-center">
              PRO-PLAYER RENTALS
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[var(--size-space-200)] absolute top-[292px] left-[390px]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-color-text-default-default text-xl tracking-[0] leading-[28.0px]">
            <input
  className="relative self-stretch mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-color-text-default-default text-xl tracking-[0] leading-[28.0px] [background:transparent] border-[none] p-0 placeholder:text-gray-600"
  placeholder="Password"
  type="text"
/>

            </div>
            <div className="flex min-w-60 items-center pt-[var(--size-space-300)] pr-[var(--size-space-400)] pb-[var(--size-space-300)] pl-[var(--size-space-400)] relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-color-background-default-default rounded-[var(--size-radius-200)] overflow-hidden border border-solid border-color-border-default-default">
              <div className="relative flex-1 mt-[-0.50px] font-single-line-body-base font-[number:var(--single-line-body-base-font-weight)] text-color-text-default-default text-[length:var(--single-line-body-base-font-size)] tracking-[var(--single-line-body-base-letter-spacing)] leading-[var(--single-line-body-base-line-height)] [font-style:var(--single-line-body-base-font-style)]">
              <div>
      <h1>Login Page</h1>
      <LocalLoginButton /> 
    </div>  
                {""}
              </div>
            </div>
          </div>
          <img src="/images/profile.jpeg" className="rounded-full !absolute !w-[187px] !h-[184px] !top-[218px] !left-[100px]" />
          <div className="absolute w-[223px] h-12 top-[479px] left-[380px]">
            {/* Additional UI elements can go here */}
          </div>

          <div className="inline-flex flex-col items-start gap-[var(--size-space-200)] absolute top-[209px] left-[390px]">
          <input
  className="relative self-stretch mt-[-1.00px] [text-shadow:0px_4px_4px_#00000040] [font-family:'Istok_Web-Regular',Helvetica] font-normal text-color-text-default-default text-xl tracking-[0] leading-[28.0px] [background:transparent] border-[none] p-0 placeholder:text-gray-600"
  placeholder="Username"
  type="text"
/>

            <div className="relative self-stretch min-w-60 w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-color-background-default-default rounded-[var(--size-radius-200)] border border-solid border-color-border-default-default" />
          </div>

          <div className="absolute top-[350px] left-[400px]">
            <LoginButton />
            
          </div>
        </div>
      </div>
    </div>
  );
};