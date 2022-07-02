const Story = ({ username }) => {
  const handleMouseOver = (e) => {
    const parent = e.target.parentElement;
    // console.log("parent :>> ", parent);

    // for (let p of parent) {
    //   console.log("p :>> ", p);
    // }

    const div = e.target.parentElement.children[0];
    div.classList.forEach((element) => {
      if (element === "hidden") {
        div.classList.remove("hidden");
        div.classList.add("active");
      }
    });

    const img = parent.querySelector(".story-pic");
    console.log("img :>> ", img);
    img.classList.add("scale-105");
  };

  const handleMouseOut = (e) => {
    // console.log(
    //   "e.target.parentElement.children[0] :>> ",
    //   e.target.parentElement.children[0].classList
    // );
    const parent = e.target.parentElement;

    const div = e.target.parentElement.children[0];
    div.classList.forEach((element) => {
      if (element === "active") {
        div.classList.remove("active");
        div.classList.add("hidden");
      }
    });

    const img = parent.querySelector(".story-pic");
    console.log("img :>> ", img);
    img.classList.remove("scale-105");
  };

  return (
    <div
      className="flex-1 px-[4px] min-w-[120px] cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="relative overflow-hidden">
        <div
          className="
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
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-black/30 to-transparent z-20"></div>
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
