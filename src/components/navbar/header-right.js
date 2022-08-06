import { useEffect } from "react";
import { useState } from "react";
import DropDownPlus from "./drop1-plus";
import DropDownMessenger from "./drop2-messenger";
import DropDownNotification from "./drop3-notification";
import More from "./drop4-more";

const HeaderRight = () => {
  const [expandPanel, setExpandPanel] = useState(null);

  const openPanel = (e, btnId) => {
    e.stopPropagation();
    // console.log("btnId :>> ", btnId);

    setExpandPanel(btnId);
  };

  useEffect(() => {
    const closePanel = () => setExpandPanel(null);

    if (expandPanel) {
      window.addEventListener("click", closePanel);
      return;
    }

    window.removeEventListener("click", closePanel);

    return () => window.removeEventListener("click", closePanel);
  }, [expandPanel, setExpandPanel]);

  return (
    <div className="flex items-center relative laptop:mr-1">
      {/* div 設定成 relative，才可以讓其中設定成 absolute 的下拉選單有個定位點，想成是黏在這個 div 中 */}
      <button
        className="popover-btn"
        id="btn-plus"
        onClick={(e) => openPanel(e, "btn-plus")}
      >
        <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="plus" />
      </button>
      <button
        className="popover-btn"
        id="btn-msg"
        onClick={(e) => openPanel(e, "btn-msg")}
      >
        <img
          src="https://bruce-fe-fb.web.app/image/messenger.svg"
          alt="messenger"
        />
      </button>
      <button
        className="popover-btn"
        id="btn-notif"
        onClick={(e) => openPanel(e, "btn-notif")}
      >
        <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="bell" />
      </button>
      <button
        className="popover-btn"
        id="bin-more"
        onClick={(e) => openPanel(e, "bin-more")}
      >
        <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="down" />
      </button>
      {/* 下拉選單 Panel 1 - plus */}
      {expandPanel === "btn-plus" ? <DropDownPlus /> : null}

      {/* 下拉選單 Panel 2 - messenger */}
      {expandPanel === "btn-msg" ? <DropDownMessenger /> : null}

      {/* 下拉選單 Panel 3 - notification */}
      {expandPanel === "btn-notif" ? <DropDownNotification /> : null}

      {/* 下拉選單 Panel 4 - more */}
      {expandPanel === "bin-more" ? <More /> : null}
    </div>
  );
};

export default HeaderRight;
