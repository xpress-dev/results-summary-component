import React from 'react';

const SummaryItem = ({ icon, text, percent, color }) => {
  return (
    <div
      className='flex px-8 py-4 justify-between rounded-md items-center text-sm'
      style={{ backgroundColor: `${color}30` }}
    >
      <div className='flex gap-5'>
        <img src={icon} />
        <p className='font-extrabold' style={{ color: color }}>
          {text}
        </p>
      </div>
      <div>
        <span className='font-extrabold'>{percent}</span>
        <span className='text-black/60 font-extrabold'> / 100</span>
      </div>
    </div>
  );
};

export default SummaryItem;
