const BtnRightArrow = () => {
  return (
    <button
      className="
            absolute
            popover-btn
            -right-3
            top-[calc(50%-22.5px)]
            z-10
            w-[45px]
            h-[45px]
            bg-neutral-500
          "
    >
      <img
        src="https://bruce-fe-fb.web.app/image/right-arrow.svg"
        // src="https://img.icons8.com/ios/50/undefined/right--v1.png"
        alt="arrow-right"
      />
    </button>
  );
};

export default BtnRightArrow;
