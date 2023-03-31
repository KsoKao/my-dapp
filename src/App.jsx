import Header from "./component/Header";

import Introdice from "./component/Introdice";

import Portfolio from "./component/Portfolio";

import Contactme from "./component/Contactme";

import Footer from "./component/Footer";

function App() {
  //바깥족 주석처리
  return (
    <div className="bg-purple-200 min-h-screen">
      {/*안쪽은 이렇게 주석처리*/}
      <Header />
      <main>
        <Introdice />
        <Portfolio />
        <Contactme />
      </main>
      <Footer />
    </div>
  );
}

export default App;
