import { Products, List } from '../interfaces/app';

export const ListItems = (props: List) => {
  const changeStatus = (e: Products) => {
    const newList = props.list.map((v: Products) => {
      if (e.id == v.id) {
        v.isFruit = !v.isFruit;
      }
      return {
        ...v,
      };
    });
    props.listClick(newList);
  };

  const productsList = props.list.map((e: Products) => (
    <div
      key={e.id}
      onClick={() => changeStatus(e)}
      className={[e.isFruit ? 'text-red' : 'text-green', 'mt-10px'].join(' ')}
    >
      {e.title}
    </div>
  ));

  return <>{productsList}</>;
};
