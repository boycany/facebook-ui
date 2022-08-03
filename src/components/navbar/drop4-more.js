const More = ({ isExpand }) => {
  return (
    <div
      className={`popover-panel ${isExpand.more ? "" : "hidden"}`}
      id="more-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-white mb-3 text-2xl">Red Chien</p>

      <div className="flex items-center justify-between">
        {/* 用 div 去把圖片裁切成圓形，記得同時下 rounded-full 和 overflow-hidden 才會將圖片超出圓形的部分隱藏起來 */}
        <div className="hover:bg-fb-active cursor-pointer flex items-center rounded-lg p-2 mb-2 ">
          <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-3">
            {/* 使用 object fit: cover 的 css 屬性來調整圖片 */}
            <img
              className="w-full object-cover"
              src="https://bruce-fe-fb.web.app/image/avator.png"
              alt="messenger avatar"
            />
          </div>
          <div className="flex-1 mr-2">
            <p className="text-white text-base mb-[1px]">Red Chien</p>
            <p className="text-gray-400 text-sm flex justify-between">
              查看你的個人檔案
            </p>
          </div>
        </div>
        <div className="flex p-3 mb-2 items-center rounded-lg cursor-pointer hover:bg-fb-active">
          <div className="bg-fb-input rounded-full p-2 mr-2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </div>
          <p className="flex-1 text-white">登出</p>
        </div>
      </div>
    </div>
  );
};

export default More;
