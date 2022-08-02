const LoadingPost = () => {
  return (
    <div className="card pb-0 px-0 animate-pulse">
      <div className="flex px-4 items-center mb-4">
        <div
          className="
            w-[44px] 
            h-[44px] 
            rounded-full 
            overflow-hidden 
            mr-3
          bg-fb-input"
        ></div>
        <div className="flex content-evenly flex-wrap w-[200px] h-[50px]">
          <div className="bg-fb-input h-[16px] w-[200px] rounded-full"></div>
          <div className="bg-fb-input h-[12px] w-[100px] rounded-full"></div>
        </div>
      </div>
      <div className="w-full h-[260px] bg-fb-input"></div>
    </div>
  );
};

export default LoadingPost;
