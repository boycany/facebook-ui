import "./App.css";
import HeaderRight from "./components/navbar/header-right";
import HeaderLeft from "./components/navbar/header-left";
import Information from "./components/left-block/information";
import Timeline from "./components/mid-block/timeline";
import Contact from "./components/right-block/contact";

function App() {
  return (
    <div className="h-full bg-fb-bg">
      <header className="w-screen h-[56px] fixed bg-fb-header top-0 left-0 right-0 flex justify-between px-4 z-50">
        {/* Header Left */}
        <HeaderLeft />
        {/* Header Right */}
        <HeaderRight />
      </header>
      <main className="min-h-[100vh] pt-main-span flex">
        {/* 左側資訊欄 */}
        <Information />
        {/* 動態牆 */}
        <Timeline />
        {/* 右側聯絡人 */}
        <Contact />
      </main>
    </div>
  );
}

export default App;
