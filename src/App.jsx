import Results from './components/Results';
import Summary from './components/Summary';
const App = () => {
  return (
    <main className='w-screen h-screen flex justify-start items-center flex-col lg:flex-row lg:w-[42rem] lg:mx-auto lg:shadow-2xl lg:h-[28rem] lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 rounded-3xl'>
      <Results />
      <Summary />
    </main>
  );
};

export default App;
