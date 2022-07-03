import Avator from "../avator";

const Room = () => {
  return (
    <div className="card pr-0 flex">
      <button
        className="
        flex 
        px-4 
        items-center
        h-[40px] 
        rounded-full
        ring-gray-600 
        ring-2 
        mr-4 
        focus:outline-none
        hover:bg-fb-input
        active:bg-fb-active"
      >
        <div className="w-[24px]">
          <img src="https://bruce-fe-fb.web.app/image/video.svg" alt="" />
        </div>
        <p className="ml-2 text-sm text-fb">建立包廂</p>
      </button>
      <div className="w-[55px]">
        <Avator divSize={40} greenPointSize={10} />
      </div>
    </div>
  );
};

export default Room;
