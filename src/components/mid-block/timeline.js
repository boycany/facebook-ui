import NewPost from "./newPost";
import Stories from "./stories/stories";
import Room from "./room";
import Post from "./posts/post";
import users from "../../data/users";
import LoadingPost from "./posts/loadingPost";

const Timeline = () => {
  return (
    <div className="max-w-[744px] w-full mx-auto px-4 pb-4">
      {/* 限時動態 */}
      <Stories />
      <NewPost />
      <Room />
      {users
        .filter((user) => user.posts.length > 0)
        .map((user) => {
          return user.posts.map((post) => {
            const { content, time, link, reply, share, like, id } = post;
            return (
              <Post
                like={like}
                shareNum={share.length}
                replyNum={reply.length}
                title={link.title}
                url={link.url}
                imgLink={link.imgLink}
                name={user.name}
                time={time}
                content={content}
                key={id}
              />
            );
          });
        })}
      <LoadingPost />
    </div>
  );
};

export default Timeline;
