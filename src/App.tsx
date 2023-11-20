import { useState, useEffect } from 'react';

type Products = {
  id: any;
  title: String;
  isFruit: Boolean;
};

const List = () => {
  useEffect(() => {
    console.log('进入');
  }, []);
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

  let productsList = list.map((e: Products) => (
    <div
      key={e.id}
      onClick={() => listClick(e)}
      className={[e.isFruit ? 'text-red' : 'text-green', 'mt-10px'].join(' ')}
    >
      {e.title}
    </div>
  ));

  return <>{productsList}</>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center h-100vh justify-center">
        <div>
          <button
            className="text-red p-5px"
            style={{ width: '100px' }}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <List></List>
        </div>
      </div>
    </>
  );
}

export default App;
