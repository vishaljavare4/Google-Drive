import React from 'react';
import Logoo from "../assets/logo.png";
import landingSplash from "../assets/landing-splash.jpg";

const Home = ({ signIn }) => {
  return (
    <div>
      <div id="root">
        <div className="w-screen h-screen overflow-hidden font-geist">
          <div className="flex items-center justify-between py-2 md:px-8">
            <div className="flex items-center h-16 gap-2 p-3 pl-6 md:w-64">
              <img src={Logoo} alt="logo" className="h-9" />
              <h2 className="text-[24px] text-zinc-600 dark:text-icons-color-dark">Disk</h2>
            </div>
            <button
              onClick={signIn}
              id='hovocolo'
              className="bg-blue-500 inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 w-32 h-12 mr-2 text-lg font-medium hover:bg-blue-600"
            >
              Log In
            </button>
          </div>
          <div className="h-[calc(100vh-4rem)] flex items-center">
            <div className="flex flex-col gap-8 p-16 md:gap-12 md:w-1/2">
              <h1 className="text-3xl leading-tight md:text-5xl lg:text-6xl">
                Easy and secure access to your content
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-500">
                Store, share, and collaborate on files and folders from your mobile device, tablet, or computer
              </p>
              <button
                onClick={signIn}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300 px-4 py-2 w-32 h-12 mr-2 text-lg font-medium bg-blue-500 hover:bg-blue-600"
              >
                Log In
              </button>
            </div>
            <img src={landingSplash} alt="Landing" className="hidden w-1/2 md:inline-block" />
          </div>
        </div>
        <div className="Toastify"></div>
      </div>
    </div>
  );
}

export default Home;
