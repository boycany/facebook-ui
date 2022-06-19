const InfoItem = ({ name, imageUrl }) => {
  return (
    <div className="flex items-center justify-items-center w-full p-2 mb-1 rounded hover:bg-fb-input cursor-pointer">
      <div className="w-[32px] rounded-full overflow-hidden mr-4">
        <img src={imageUrl} alt={name} />
      </div>
      <p className="text-white text-[.9rem]">{name}</p>
    </div>
  );
};

export default InfoItem;
