import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function App() {
  const data = [
    {
      title: "Using Abstract",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
      link: "Learn More",
      icon: "https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
    },
    {
      title: "Manage your account",
      description:
        "Configure your account settings, such as your email, profile details, and password.",
      link: "Learn More",
      icon: "https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
    },
    {
      title: "Manage organizations, teams, and projects",
      description:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
      link: "Learn More",
      icon: "https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
    },
    {
      title: "Manage billing",
      description:
        "Manage your Abstract billing, including billing history, invoices, and payment methods.",
      link: "Learn More",
      icon: "https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
    },
  ];
  return (
    <>
      <header className="bg-black text-white p-4 flex justify-between">
        <div className=" flex flex-row items-center gap-3 cursor-pointer">
          <img
            src="https://assets-global.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
            alt=""
            width={80}
          />
          <p className="text-3xl">|</p>
          <a href="#" className="first-line:hover:underline">
            Help Center
          </a>
        </div>
        <div className="flex flex-row gap-3">
          <button className="!text-xs !p-0 !px-3 base-btn__primary-outline !text-white">
            Submit a Request
          </button>
          <button className="!text-xs !p-0 !px-3 base-btn__primary">
            Sign in
          </button>
        </div>
      </header>

      <section className="bigetron flex flex-col justify-center items-center h-[300px] gap-3 bg-[#dadbf1]">
        <h1 className="text-3xl">How can we help?</h1>
        <div className="relative hover:text-[#4C5FD5]">
          <input
            className="form-input text-2xl font-normal !w-[400px]"
            type="text"
            placeholder="search"
          />
          <AiOutlineArrowRight className="text-2xl absolute top-4 right-5" />
        </div>
      </section>

      <section className="my-16 mx-4">
        <div className="grid grid-cols-2 gap-12">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex gap-3">
                <div className="">
                  <img src={item.icon} alt="" width={200} />
                </div>
                <div className="space-y-3">
                  <h2 className="font-bold">{item.title}</h2>
                  <p className="text-sm text-slate-500">{item.description}</p>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:underline text-[#4C5FD5]"
                  >
                    Learn More <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      <footer className="p-4 bg-black text-white">
        <section className="flex gap-8 text-sm">
          <div className="flex flex-col gap-3 ">
            <h2 className="text-xl font-bold">Abstract</h2>
            <ul>
              <li>Start Trial</li>
              <li>Plans & Pricing</li>
              <li>Download</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 ">
            <h2 className="text-xl font-bold">Resources</h2>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
        </section>
        <div className="flex text-xs items-center gap-3 mt-8">
          <img
            src="https://pps.services.adobe.com/api/profile/678331974A30C4F1992015B9@AdobeID/image/863d9a3f-63eb-4ed0-9947-574829bdca37/115"
            alt=""
            className="rounded-2xl w-12 h-12"
          />
          <p>© Copyright 2023</p>
          <p>Abstract Studio Design, Inc.</p>
          <p>All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
