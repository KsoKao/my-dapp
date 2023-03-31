const Header = () => {
  return (
    <header className="bg-purple-200 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div className="text-lg font-bold text-gray-500 hover:animate-pulse">
          💥Wook's Portfolio
        </div>
        {/* <div>
        <img className="w-[48px]" src={pic} alt="123" />
      </div> */}
        <ul className="flex gap-2 md:gap-8 text-xs md:text-base">
          <li className="bg-blue-500 px-2 py-1 btn-style hover:animate-pulse">
            Introduce
          </li>
          <li className="bg-blue-500 px-2 py-1 btn-style hover:animate-pulse">
            Portfolio
          </li>
          <li className="bg-blue-500 px-2 py-1 btn-style hover:animate-pulse">
            Contact Me
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
