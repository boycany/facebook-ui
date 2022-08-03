import { useEffect } from "react";
import { useState } from "react";
import DropDownPlus from "./drop1-plus";
import DropDownMessenger from "./drop2-messenger";
import DropDownNotification from "./drop3-notification";
import More from "./drop4-more";

const HeaderRight = () => {
  const [expandPanel, setExpandPanel] = useState({
    plus: false,
    msg: false,
    notif: false,
    more: false,
  });

  const openPanel = (e, btnId) => {
    e.stopPropagation();
    // console.log("btnId :>> ", btnId);

    if (btnId === "btn-0") {
      setExpandPanel({
        plus: true,
        msg: false,
        notif: false,
        more: false,
      });
    }
    if (btnId === "btn-1") {
      setExpandPanel({
        plus: false,
        msg: true,
        notif: false,
        more: false,
      });
    }
    if (btnId === "btn-2") {
      setExpandPanel({
        plus: false,
        msg: false,
        notif: true,
        more: false,
      });
    }
    if (btnId === "btn-3") {
      setExpandPanel({
        plus: false,
        msg: false,
        notif: false,
        more: true,
      });
    }
  };

  useEffect(() => {
    const closePanel = () =>
      setExpandPanel({
        plus: false,
        msg: false,
        notif: false,
        more: false,
      });
    for (let key in expandPanel) {
      if (expandPanel[key]) {
        window.addEventListener("click", closePanel);
        return;
      }
    }
    // console.log("all false!");
    window.removeEventListener("click", closePanel);

    return () => window.removeEventListener("click", closePanel);
  }, [expandPanel, setExpandPanel]);

  return (
    <div className="flex items-center relative">
      {/* div 設定成 relative，才可以讓其中設定成 absolute 的下拉選單有個定位點，想成是黏在這個 div 中 */}
      <button
        className="popover-btn"
        id="btn-0"
        onClick={(e) => openPanel(e, "btn-0")}
      >
        <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="plus" />
      </button>
      <button
        className="popover-btn"
        id="btn-1"
        onClick={(e) => openPanel(e, "btn-1")}
      >
        <img
          src="https://bruce-fe-fb.web.app/image/messenger.svg"
          alt="messenger"
        />
      </button>
      <button
        className="popover-btn"
        id="btn-2"
        onClick={(e) => openPanel(e, "btn-2")}
      >
        <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="bell" />
      </button>
      <button
        className="popover-btn"
        id="btn-3"
        onClick={(e) => openPanel(e, "btn-3")}
      >
        <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="down" />
      </button>
      {/* 下拉選單 1 - plus */}
      <DropDownPlus isExpand={expandPanel} />

      {/* 下拉選單 2 - messenger */}
      <DropDownMessenger isExpand={expandPanel} />

      {/* 下拉選單 3 - notification */}
      <DropDownNotification isExpand={expandPanel} />

      {/* 下拉選單 4 - more */}
      <More isExpand={expandPanel} />
    </div>
  );
};

export default HeaderRight;
