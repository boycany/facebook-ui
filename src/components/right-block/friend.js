import Avator from "../avator";

const Friend = ({ name }) => {
  return (
    <div
      className="
          flex 
          items-center 
          justify-items-center 
          w-full 
          py-2 
          px-1 
          rounded 
          hover:bg-fb-input 
          cursor-pointer
          "
    >
      <div className="w-[45px]">
        <Avator divSize={32} greenPointSize={8} />
      </div>
      <p className="text-white text-[0.9rem]">{name}</p>
    </div>
  );
};

export default Friend;
