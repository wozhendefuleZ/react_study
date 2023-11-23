import { useState, useEffect } from 'react';

type Products = {
  id: any;
  title: String;
  isFruit: Boolean;
};

type List = {
  list: Array<Products>;
  listClick: (e: Products) => void;
};
const List = (props: List) => {
  let productsList = props.list.map((e: Products) => (
    <div
      key={e.id}
      onClick={() => props.listClick(e)}
      className={[e.isFruit ? 'text-red' : 'text-green', 'mt-10px'].join(' ')}
    >
      {e.title}
    </div>
  ));

  return <>{productsList}</>;
};

function App() {
  useEffect(() => {
    console.log('进入');
  }, []); // 数组内有变量那么变动是会继续触发

  let products: Array<Products> = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const [list, setList] = useState(products);

  const listClick = (e: Products) => {
    setList(
      list.map((v: Products) => {
        if (e.id == v.id) {
          v.isFruit = !v.isFruit;
        }
        return {
          ...v,
        };
      })
    );
  };

  return (
    <>
      <div className="flex items-center h-100vh justify-center">
        <div>
          <List list={list} listClick={listClick}></List>
        </div>
      </div>
    </>
  );
}

export default App;
