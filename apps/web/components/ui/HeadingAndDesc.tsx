import React from "react";

const HeadingAndDesc = ({head,desc}:{head:string,desc:string}) => {
  return (
    <section>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold ">
          {head}
        </h2>
        <p className=" mt-2 text-sm max-w-xl mx-auto lg:text-lg">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default HeadingAndDesc;
