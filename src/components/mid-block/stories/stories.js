import Story from "./components/story";
import NewStory from "./components/newStory";
import BtnRightArrow from "./components/btnRightArrow";
import users from "../../../data/users";

const Stories = () => {
  //#region
  // const handleMouseOver = (e) => {
  //   const parent = e.target.parentElement;
  //   // console.log("e.target.parentElement :>> ", e.target.parentElement);
  //   // console.log("e.target :>> ", e.target);

  //   const div = parent.querySelector(".filter-black20");
  //   div.classList.remove("hidden");

  //   const img = parent.querySelector(".story-pic");
  //   img.classList.add("scale-105");
  // };

  // const handleMouseOut = (e) => {
  //   const parent = e.target.parentElement;

  //   const div = parent.querySelector(".filter-black20");
  //   div.classList.add("hidden");

  //   const img = parent.querySelector(".story-pic");
  //   img.classList.remove("scale-105");
  // };
  //#endregion

  return (
    <div className="relative">
      <div className="flex overflow-x-auto invisible-scrollbar" id="story-list">
        {/* “新增限時動態” */}
        <NewStory />
        {/* 限時動態 */}
        {users
          .filter((user) => user.stories.length > 0)
          .map((user) => (
            <Story username={user.name} key={user.id} />
          ))}
      </div>
      {/* 限時動態滑動按鈕 */}
      <BtnRightArrow />
    </div>
  );
};

export default Stories;
