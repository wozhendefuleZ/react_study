const Header = (porps: any) => {
  return (
    <div className="h-60px bg-#fff flex items-center pl-15px pr-25px">
      <div  onClick={() => porps.setExpanded(!porps.expanded)}>{porps.expanded ? '收起' : '展开'}</div>
      <div className="ml-auto">推出</div>
    </div>
  );
};

export default Header;
