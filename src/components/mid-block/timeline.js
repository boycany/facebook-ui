import NewPost from "./newPost";
import Stories from "./stories/stories";
import Room from "./room";

const Timeline = () => {
  return (
    <div className="max-w-[744px] w-full mx-auto px-4">
      {/* 限時動態 */}
      <Stories />
      <NewPost />
      <Room />
    </div>
  );
};

export default Timeline;
