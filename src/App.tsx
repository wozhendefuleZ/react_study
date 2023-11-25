import { useState, useEffect } from 'react';
import { Products } from '@/interfaces/app';
import { ListItems } from '@/components/ListItems';

function App() {
  useEffect(() => {
    console.log('进入');
  }, []); // 数组内有变量那么变动是会继续触发

  const products: Array<Products> = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: true, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const [list, setList] = useState(products);



  return (
    <>
      <div className="flex items-center h-100vh justify-center">
        <div>
          <ListItems
            list={list}
            listClick={(e: Array<Products>) => setList(e)}
          ></ListItems>

        </div>
      </div>
    </>
  );
}

export default App;
