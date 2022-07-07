const BlackFilter20 = ({ isHidden }) => {
  return (
    <div
      className={`
          filter-black20
          ${isHidden ? "hidden" : ""}
          absolute 
          w-full 
          h-full 
          top-0 
          left-0
          bg-black/20 z-20`}
    ></div>
  );
};

export default BlackFilter20;
