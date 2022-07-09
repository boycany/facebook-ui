import InfoItem from "./infoItem";
import infoArr from "./infoArr";

const Information = () => {
  return (
    <div
      id="left-block"
      className="hidden top-main-span max-w-[360px] w-full h-full pl-4 laptop:block"
    >
      {infoArr.map((item, idx) => {
        return <InfoItem key={idx} name={item.name} imageUrl={item.imageUrl} />;
      })}
    </div>
  );
};

export default Information;
