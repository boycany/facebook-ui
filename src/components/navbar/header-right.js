import DropDownPlus from "./drop1-plus";
import DropDownMessenger from "./drop2-messenger";
import DropDownNotification from "./drop3-notification";
import More from "./drop4-more";

const HeaderRight = () => {
  return (
    <div className="flex items-center relative">
      {/* div 設定成 relative，才可以讓其中設定成 absolute 的下拉選單有個定位點，想成是黏在這個 div 中 */}
      <button className="popover-btn lg:hidden" id="plus-btn">
        <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="plus" />
      </button>
      <button className="popover-btn lg:hidden" id="messenger-btn">
        <img
          src="https://bruce-fe-fb.web.app/image/messenger.svg"
          alt="messenger"
        />
      </button>
      <button className="popover-btn lg:hidden" id="bell-btn">
        <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="bell" />
      </button>
      <button className="popover-btn lg:hidden" id="down-btn">
        <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="down" />
      </button>
      {/* 下拉選單 1 - plus */}
      <DropDownPlus />

      {/* 下拉選單 2 - messenger */}
      <DropDownMessenger />

      {/* 下拉選單 3 - notification */}
      <DropDownNotification />

      {/* 下拉選單 4 - more */}
      <More />
    </div>
  );
};

export default HeaderRight;
