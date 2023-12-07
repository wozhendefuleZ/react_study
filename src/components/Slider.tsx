const Slider = (porps: any) => {
  return (
    <div
      className={[porps.expanded ? 'w-200px' : 'w-80px', 'bg-#fff'].join(' ')}
    >
      {porps.expanded && (
        <div className="slider-content">
          {/* 在这里放置展开后的内容 */}
          Lorem ip
        </div>
      )}
    </div>
  );
};

export default Slider;
