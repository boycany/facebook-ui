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
        <div className="relative w-[32px] cursor-pointer">
          <div className="overflow-hidden rounded-full">
            <img
              src="https://bruce-fe-fb.web.app/image/avator.png"
              alt="friend"
            />
          </div>
          <div
            className="
                w-[8px]
                h-[8px]
                rounded-full
                bg-green-500
                absolute
                bottom-0
                right-0
                ring-gray-900
                ring
              "
          ></div>
        </div>
      </div>
      <p className="text-white text-[0.9rem]">{name}</p>
    </div>
  );
};

export default Friend;
