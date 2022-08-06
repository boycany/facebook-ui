const NewPost = () => {
  return (
    <div className="card">
      <div className="flex pb-4">
        {/* 圓形小頭貼 */}
        <div className="w-[40px] rounded-full overflow-hidden mr-3">
          <img
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="userImage"
          />
        </div>
        {/* input */}
        <div className="bg-fb-input rounded-full flex flex-1 items-center">
          <input
            type="text"
            className="pl-3 text-white text-sm text-left focus:outline-none bg-transparent"
            placeholder="Red，在想些什麼？"
          />
        </div>
      </div>
      <div className="border-t border-gray-700 flex pt-3">
        <button className="flex-1 h-[40px] rounded-lg flex items-center justify-center hover:bg-fb-input">
          <div className="w-[16px]">
            <img src="https://bruce-fe-fb.web.app/image/camera.svg" alt="" />
          </div>
          <p className="text-gray-400 text-sm pl-1.5">直播視訊</p>
        </button>
        <button className="flex-1 h-[40px] rounded-lg flex items-center justify-center hover:bg-fb-input">
          <div className="w-[16px]">
            <img src="https://bruce-fe-fb.web.app/image/photo.svg" alt="" />
          </div>
          <p className="text-gray-400 text-sm pl-1.5">相片/影片</p>
        </button>
        <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
          <div className="w-[16px]">
            <img src="https://bruce-fe-fb.web.app/image/feel.svg" alt="" />
          </div>
          <p className="text-gray-400 text-sm pl-1.5">感受/活動</p>
        </button>
      </div>
    </div>
  );
};

export default NewPost;
