import React from 'react';

const Skill = () => {
  return (
    <section className="my-28  px-5">
      <header className="text-2xl font-bold pt-10">
        <h2>Skills & Tools</h2>
      </header>
      <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6">
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="iOS 14"
        >
          <img
            src="./images/icons/ios.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          iOS 14
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Xcode"
        >
          <img
            src="./images/icons/xcode.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Xcode
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Swift 5"
        >
          <img
            src="./images/icons/swift.png"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Swift 5
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Javascript"
        >
          <img
            src="./images/icons/javascript-original.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Javascript
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="React Js"
        >
          <img
            src="./images/icons/react-original.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          React JS
        </div>
        <div
          className="flex flex-col items-center"
          tabIndex="0"
          role="img"
          aria-label="Node Js"
        >
          <img
            src="./images/icons/nodejs-original.svg"
            alt=""
            loading="lazy"
            className="w-16 mb-1"
            width="64px"
            height="64px"
          />
          Node JS
        </div>
      </div>
    </section>
  );
};

export default Skill;
