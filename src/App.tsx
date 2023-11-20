import { useState, useEffect } from 'react';

type Products = {
  id: any;
  title: String;
  isFruit: Boolean;
};

function App() {
  const [count, setCount] = useState(0);
  let products: Array<Products> = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const [list, setList] = useState(products);

  useEffect(() => {
    console.log('进入');

    return () => {
      console.log('离开');
    };
  }, []);
  // useEffect(() => {
  //   console.log('进入222', count);
  //   // return () => {
  //   //   console.log('离开');
  //   // };
  // }, [count]);

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

          {productsList}
        </div>
      </div>
    </>
  );
}

export default App;
