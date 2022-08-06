const DropDownMessenger = () => {
  // console.log("isHidden :>> ", isHidden);
  return (
    <div
      className={`popover-panel`}
      id="msg-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-white mb-3 text-2xl">Messenger</p>
      <div className="bg-fb-input rounded-full py-1 px-3 flex items-center mb-4">
        {/* 這個實作 input 的技巧是用一個 div 來將 input 和 svg 包起來，然後將 input 的樣式都寫在 div 裡 */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] h-[18px] mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#9ba3af"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {/* input 這邊設定背景顏色透明 bg-transparent, 捨定 focus: outline-none 來取消 被選取時會顯示邊框 的動畫*/}
        <input
          type="text"
          className="bg-transparent w-full text-white focus: outline-none"
          placeholder="搜尋 Messenger"
        />
      </div>
      <div className="flex items-center mb-2 p-2 rounded-lg hover:bg-fb-active cursor-pointer">
        {/* 用 div 去把圖片裁切成圓形，記得同時下 rounded-full 和 overflow-hidden 才會將圖片超出圓形的部分隱藏起來 */}
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
          {/* 使用 object fit: cover 的 css 屬性來調整圖片 */}
          <img
            className="w-full object-cover"
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="messenger avatar"
          />
        </div>
        <div className="flex-1">
          <p className="text-white text-base mb-[1px]">Bruce Lee</p>
          <p className="text-gray-400 text-sm flex justify-between">
            <span>Hello World~~!</span>
            <span> • 3 分鐘前</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropDownMessenger;
