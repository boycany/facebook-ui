const Post = ({
  time,
  content,
  name,
  imgLink,
  url,
  title,
  replyNum,
  shareNum,
  like,
}) => {
  return (
    <div className="card pb-0 px-0">
      {/* 貼文標題 */}
      <div className="flex px-4">
        <div className="w-[44px] rounded-full overflow-hidden mr-3">
          <img
            src="https://bruce-fe-fb.web.app/image/avator.png"
            alt="avator"
          />
        </div>
        <div className="flex-1">
          <p className="text-white">{name}</p>
          <div className="flex items-center text-gray-400 text-sm">
            <div>{time}</div>
            <div>．</div>
            <div className="w-[12px]">
              <img
                src="https://bruce-fe-fb.web.app/image/earth.svg"
                alt="earth"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <button className="w-[12px] focus:outline-none">
          <img src="https://bruce-fe-fb.web.app/image/more.svg" alt="more" />
        </button>
      </div>
      {/* 貼文內文 */}
      <p className="text-base text-gray-300 mt-3 px-4 ">{content}</p>
      {/* 貼文圖片： <a> 屬於 inline 的元素，如果不換成 block，下 margin 參數會無效 */}
      <a href="/" className="block mt-3">
        <div className="h-[260px] w-full overflow-hidden">
          <img src={imgLink} alt="post" className="w-full object-cover" />
        </div>
        <div className="bg-fb-input text-white px-4 py-2">
          <p className="text-gray-400 text-sm">{url}</p>
          <p className="text-lg">{title}</p>
        </div>
      </a>
      {/* 讚、留言 */}
      <div className="px-4">
        <div className="border-b border-gray-700 flex justify-between py-3">
          <div className="flex items-center">
            <div className="w-[18px] mr-2">
              <img
                src="https://bruce-fe-fb.web.app/image/like-blue.svg"
                alt="like-blue"
              />
            </div>
            <p className="text-sm text-gray-400">{like}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-gray-400 mr-2">{replyNum}則留言</p>
            <p className="text-sm text-gray-400">{shareNum}次分享</p>
          </div>
        </div>
        <div className="flex items-center py-2">
          <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
            <div className="w-[16px]">
              <img
                src="https://bruce-fe-fb.web.app/image/like.svg"
                alt="like"
              />
            </div>
            <p className="text-gray-400 text-sm pl-1.5">讚</p>
          </button>
          <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
            <div className="w-[16px]">
              <img
                src="https://bruce-fe-fb.web.app/image/chat.svg"
                alt="chat"
              />
            </div>
            <p className="text-gray-400 text-sm pl-1.5">留言</p>
          </button>
          <button className="flex-1 h-[40px] rounded-lg hover:bg-fb-input flex items-center justify-center">
            <div className="w-[16px]">
              <img
                src="https://bruce-fe-fb.web.app/image/share.svg"
                alt="share"
              />
            </div>
            <p className="text-gray-400 text-sm pl-1.5">分享</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
