const NewStory = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
      <div className="h-full flex flex-col relative">
        {/* 做動畫效果的第二層濾鏡 */}
        <div
          className="
          filter-black20
          hidden
          absolute 
          w-full 
          h-full 
          top-0 
          left-0
          bg-black/20 z-20"
        ></div>
        {/* 大頭貼照 */}
        <div className="overflow-hidden h-full">
          <img
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="friend"
            className="object-cover w-full h-full duration-500 story-pic"
          />
        </div>
        {/* 第一層濾鏡遮罩 */}
        <div
          className="
          absolute 
          w-full 
          h-full 
          top-0 
          left-0 
          bg-gradient-to-b
          from-black/30 
          to-transparent 
          z-20"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></div>
        {/* 下半部文字跟按鈕區塊 */}
        <div className="bg-fb-card pt-6 px-2 pb-2 relative">
          <button
            className="
                  w-[32px] 
                  h-[32px] 
                  p-2 
                  absolute 
                  -top-4 
                  left-[calc(50%-16px)]  
                  bg-fb 
                  rounded-full 
                  focus:outline-none
                  ring-fb-card 
                  ring 
                  justify-center 
                  items-center"
          >
            {/* left-[calc(50%-16px)] 是利用“框框的50%” 減去 “按鈕的一半寬度” 來做計算 */}
            <img
              src="https://bruce-fe-fb.web.app/image/plus.svg"
              alt="add new story"
            />
          </button>
          <p className="w-full text-center text-white">建立限時動態</p>
        </div>
      </div>
    </div>
  );
};

export default NewStory;