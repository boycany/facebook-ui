import Friend from "./friend";
import friendsArr from "./friendsArr";

const Contact = () => {
  return (
    <div
      id="right-block"
      className="hidden sticky top-main-span max-w-[360px] w-full h-full lg:block"
    >
      {/* <p className="w-full bg-green-300">右側聯絡人</p> */}
      <p className="mb-2 text-lg text-gray-400">聯絡人</p>
      {friendsArr.map((friend, idx) => {
        return <Friend name={friend.name} key={idx} />;
      })}
    </div>
  );
};

export default Contact;
