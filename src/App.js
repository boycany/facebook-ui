import "./App.css";

function App() {
  return (
    <div className="h-full bg-fb-bg">
      <header className="w-full h-[56px] fixed bg-fb-header top-0 left-0 right-0 flex justify-between px-4">
        {/* Header Left */}
        <div className="flex items-center">
          {/* FB LOGO */}
          <svg
            viewBox="0 0 36 36"
            className="fill-current text-fb"
            height="39"
            width="39"
          >
            <defs>
              <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%">
                <stop offset="0%" stop-color="#0062E0"></stop>
                <stop offset="100%" stop-color="#19AFFF"></stop>
              </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path>
            <path
              className="fill-current text-white"
              d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            ></path>
          </svg>
          <button className="popover-btn lg:hidden">
            <img
              src="https://bruce-fe-fb.web.app/image/search.svg"
              alt="search"
            />
          </button>
          <div className="bg-fb-input ml-2 py-2 px-3 w-[240px] rounded-full items-center hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] h-[18px] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#9ba3af"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              className="w-full bg-transparent text-white focus:outline-none"
              placeholder="搜尋 Facebook"
            />
          </div>
        </div>
        {/* Header Right */}
        <div className="flex items-center">
          <button className="popover-btn lg:hidden">
            <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="plus" />
          </button>
          <button className="popover-btn lg:hidden">
            <img
              src="https://bruce-fe-fb.web.app/image/messenger.svg"
              alt="messenger"
            />
          </button>
          <button className="popover-btn lg:hidden">
            <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="bell" />
          </button>
          <button className="popover-btn lg:hidden">
            <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="down" />
          </button>
        </div>
      </header>
      <main className="min-h-[100vh] pt-main-span flex">
        {/* 左側資訊欄 */}
        <div className="hidden sticky top-main-span max-w-[360px] w-full h-full lg:block">
          <p className="w-full bg-blue-300">左側資訊欄</p>
        </div>
        {/* 動態牆 */}
        <div className="max-w-[744px] w-full mx-auto h-[200vh]">
          <p className="w-full bg-white">動態牆</p>
        </div>
        {/* 右側聯絡人 */}
        <div className="hidden sticky top-main-span max-w-[360px] w-full h-full lg:block">
          <p className="w-full bg-green-300">右側聯絡人</p>
        </div>
      </main>
    </div>
  );
}

export default App;
