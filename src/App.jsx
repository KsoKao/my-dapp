function App() {
  //바깥족 주석처리
  return (
    <div className="bg-red-100 min-h-screen">
      {/*안쪽은 이렇게 주석처리*/}
      <header className="bg-purple-200 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
          <div>Wook's Portfolio</div>
          {/* <div>
            <img className="w-[48px]" src={pic} alt="123" />
          </div> */}
          <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
            <li className="bg-indigo-400 px-2 py-1 btn-style">Introduce</li>
            <li className="bg-indigo-400 px-2 py-1 btn-style">Portfolio</li>
            <li className="bg-indigo-500 px-2 py-1 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
