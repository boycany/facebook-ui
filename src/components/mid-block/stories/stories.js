import Story from "./components/story";
import NewStory from "./components/newStory";
import BtnRightArrow from "./components/btnRightArrow";
import users from "../../../data/users";

const Stories = () => {
  return (
    <div className="relative">
      <div className="flex overflow-x-auto invisible-scrollbar" id="story-list">
        {/* “新增限時動態” */}
        <NewStory />
        {/* 限時動態 */}
        {users
          .filter((user) => user.stories.length > 0)
          .map((user) => {
            return <Story username={user.name} key={user.id} />;
          })}
      </div>

      {/* 限時動態滑動按鈕 */}
      <BtnRightArrow />
    </div>
  );
};

export default Stories;
