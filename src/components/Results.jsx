import React from 'react';

const Results = () => {
  return (
    <section className='w-full text-center flex jusitfy-center items-center flex-col bg-gradient-to-b from-[#7857ff] to-[#2e2be9] p-8 font-extrabold gap-5 rounded-br-3xl rounded-bl-3xl'>
      <p className='text-[#c8c7ff]'>Your Result</p>
      <div className='w-32 h-32 rounded-full flex justify-center items-center flex-col bg-gradient-to-b from-[#4e21ca] to-[#2421ca00]'>
        <span className='text-5xl text-white'>76</span>
        <span className='text-[#c8c7ff80]'>of 100</span>
      </div>
      <p className='text-2xl text-white'>Great</p>
      <p className='text-[#c8c7ff]'>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </section>
  );
};

export default Results;
