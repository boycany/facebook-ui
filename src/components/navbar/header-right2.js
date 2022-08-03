import DropDownPlus from "./drop1-plus";
import DropDownMessenger from "./drop2-messenger";
import DropDownNotification from "./drop3-notification";
import More from "./drop4-more";
import { Component } from "react";
class HeaderRight extends Component {
  constructor() {
    super();
    this.state = {
      plusPanel: "",
      msgPanel: "",
      notificationPanel: "",
      morePanel: "",
      panels: [],
    };
  }

  componentDidMount() {
    const plusElement = document.getElementById("plus-panel");
    const msgElement = document.getElementById("msg-panel");
    const notificationElement = document.getElementById("notification-panel");
    const moreElement = document.getElementById("more-panel");

    this.setState({
      plusPanel: plusElement,
      msgPanel: msgElement,
      notificationPanel: notificationElement,
      morePanel: moreElement,
      panels: [plusElement, msgElement, notificationElement, moreElement],
    });

    window.addEventListener("click", this.closePanel);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.closePanel);
  }

  closePanel = (e) => {
    console.log("window click");
    // 選 -1 就等於是不會選到 panels 陣列裡有的東西，就等於是關閉panel
    this.openPanel(-1);
  };

  openPanel = (index) => {
    // console.log("plusPanel :>> ", plusPanel);
    // console.log("panels :>> ", panels);
    this.state.panels.forEach((p, idx) => {
      if (index === idx) {
        p.classList.remove("hidden");
        return;
      }
      if (p.classList.contains("hidden")) {
        return;
      }
      //如果不是指定開啟的panel，也不是本來就預設是隱藏的panel，那就會是上一個動作打開的
      p.classList.add("hidden");
    });
  };

  choosePanel = (e) => {
    e.stopPropagation(); //停止冒泡事件

    let btnId;
    if (!e.target.id) {
      btnId = e.target.parentElement.id;
    } else {
      btnId = e.target.id;
    }
    // document.getElementById("plus-panel");
    btnId = btnId.split("-")[0];
    switch (btnId) {
      case "plus":
        this.openPanel(0);
        break;
      case "msg":
        this.openPanel(1);
        break;
      case "notification":
        this.openPanel(2);
        break;
      case "more":
        this.openPanel(3);
        break;
      default:
        break;
    }

    // console.log(btnId);
    // const panel = document.getElementById(btnId);
    // panel.classList.remove("hidden");
  };

  handlePanel = (e) => {
    e.stopPropagation();
    // console.log(e.target);
  };
  render() {
    return (
      <div className="flex items-center relative">
        {/* div 設定成 relative，才可以讓其中設定成 absolute 的下拉選單有個定位點，想成是黏在這個 div 中 */}
        <button
          className="popover-btn"
          id="plus-btn"
          onClick={this.choosePanel}
        >
          <img src="https://bruce-fe-fb.web.app/image/plus.svg" alt="plus" />
        </button>
        <button className="popover-btn" id="msg-btn" onClick={this.choosePanel}>
          <img
            src="https://bruce-fe-fb.web.app/image/messenger.svg"
            alt="messenger"
          />
        </button>
        <button
          className="popover-btn"
          id="notification-btn"
          onClick={this.choosePanel}
        >
          <img src="https://bruce-fe-fb.web.app/image/bell.svg" alt="bell" />
        </button>
        <button
          className="popover-btn"
          id="more-btn"
          onClick={this.choosePanel}
        >
          <img src="https://bruce-fe-fb.web.app/image/down.svg" alt="down" />
        </button>
        {/* 下拉選單 1 - plus */}
        <DropDownPlus handlePanel={this.handlePanel} />

        {/* 下拉選單 2 - messenger */}
        <DropDownMessenger handlePanel={this.handlePanel} />

        {/* 下拉選單 3 - notification */}
        <DropDownNotification handlePanel={this.handlePanel} />

        {/* 下拉選單 4 - more */}
        <More handlePanel={this.handlePanel} />
      </div>
    );
  }
}

export default HeaderRight;
