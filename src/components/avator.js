const Avator = ({ divSize, greenPointSize }) => {
  const divClass = `relative w-[${divSize}px] cursor-pointer`;

  const greenPoint = `w-[${greenPointSize}px]
                h-[${greenPointSize}px]
                p-1
                rounded-full
                bg-fb-point
                absolute
                bottom-0
                right-0
                ring-gray-900
                ring`;

  return (
    <div className={divClass}>
      <div className="overflow-hidden rounded-full">
        <img src="https://bruce-fe-fb.web.app/image/avator.png" alt="friend" />
      </div>
      <div className={greenPoint}></div>
    </div>
  );
};

export default Avator;
