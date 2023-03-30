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
            <li className="bg-pink-400 px-2 py-1 btn-style">Portfolio</li>
            <li className="bg-blue-500 px-2 py-1 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Introdice */}
        <div className="bg-purple-100 max-w-screen-x1 ma-auto h-96 flex justify-center items-center">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8 py-8">
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-300 w-60 h-72 rounded-xl">
            {/* object-fit: cover */}
            <div className="bg-yellow-100 w-full h-1/2 rounded-tr-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
        </ul>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
      </main>
      <footer className="max-w-screen-xl mx-auto flex justify-end py-1 md:py-2">
        2023, Designed by, Wook
      </footer>
    </div>
  );
}

export default App;
