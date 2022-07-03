import NewPost from "./newPost";
import Stories from "./stories/stories";

const Timeline = () => {
  return (
    <div className="max-w-[744px] w-full mx-auto px-4">
      {/* 限時動態 */}
      <Stories />
      <NewPost />
    </div>
  );
};

export default Timeline;
