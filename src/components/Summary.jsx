import React from 'react';
import SummaryItem from './SummaryItem';
import reactionIcon from '../assets/images/icon-reaction.svg';
import memoryIcon from '../assets/images/icon-memory.svg';
import visualIcon from '../assets/images/icon-visual.svg';
import verbalIcon from '../assets/images/icon-verbal.svg';
const Summary = () => {
  return (
    <section className='flex flex-col text-left w-full p-8 gap-5 lg:flex-2'>
      <p className='font-extrabold'>Summary</p>
      <SummaryItem
        icon={reactionIcon}
        text='Reaction'
        percent='80'
        color='#ff5757'
      />
      <SummaryItem
        icon={memoryIcon}
        text='Memory'
        percent='92'
        color='#ffb01f'
      />
      <SummaryItem
        icon={verbalIcon}
        text='Verbal'
        percent='61'
        color='#00bd91'
      />
      <SummaryItem
        icon={visualIcon}
        text='Visual'
        percent='72'
        color='#1125d4'
      />
      <button className='text-white w-full py-4 rounded-full bg-[#303b5a] hover:bg-gradient-to-b from-[#7857ff] to-[#2e2be9] '>
        Continue
      </button>
    </section>
  );
};

export default Summary;
