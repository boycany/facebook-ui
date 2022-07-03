const Story = ({ username, handleMouseOver, handleMouseOut }) => {
  return (
    <div className="flex-1 px-[4px] min-w-[120px] cursor-pointer">
      <div className="relative overflow-hidden">
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
        {/* 圓形大頭照 */}
        <div
          className="
            w-[32px] 
            h-[32px] 
            absolute 
            top-4 
            left-4 
            ring-4
            ring-fb
            bg-fb-card 
            rounded-full
            overflow-hidden
            z-10
            "
        >
          <img
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="friend"
          />
        </div>
        {/* 灰黑色濾鏡遮罩，漸層的語法是：from....via....to....(下面的例子就是:從黑色到透明色)(省略via)*/}
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
        <img
          src="https://picsum.photos/325/577?random=10"
          className="w-full h-full duration-500 story-pic"
          alt="story"
        />
        {/* 使用者名稱 */}
        <p className="absolute bottom-2 left-2 text-white">{username}</p>
      </div>
    </div>
  );
};

export default Story;