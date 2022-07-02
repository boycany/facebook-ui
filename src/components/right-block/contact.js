import Friend from "./friend";
import users from "../../data/users";

const Contact = () => {
  return (
    <div
      id="right-block"
      className="hidden top-main-span max-w-[360px] w-full h-full lg:block"
    >
      <p className="mb-2 text-lg text-gray-400">聯絡人</p>
      {users.map((friend) => {
        return <Friend name={friend.name} key={friend.id} />;
      })}
    </div>
  );
};

export default Contact;
