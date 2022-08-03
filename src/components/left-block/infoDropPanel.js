import InfoItem from "./infoItem";
import infoArr from "./infoArr";

const InfoDropPanel = () => {
  return (
    <div className="popover-panel left-0 max-h-[88vh] overflow-scroll">
      {infoArr.map((item, idx) => {
        return <InfoItem key={idx} name={item.name} imageUrl={item.imageUrl} />;
      })}
    </div>
  );
};

export default InfoDropPanel;
