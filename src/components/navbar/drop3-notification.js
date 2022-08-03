const DropDownNotification = ({ isExpand }) => {
  return (
    <div
      className={`popover-panel ${isExpand.notif ? "" : "hidden"}`}
      id="notification-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-white mb-3 text-2xl">通知</p>

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
          <p className="text-white text-base mb-[1px]">
            Red Chien 發佈了一則新貼文
          </p>
          <p className="text-fb text-xs">• 1 分鐘前</p>
        </div>
      </div>
    </div>
  );
};

export default DropDownNotification;
