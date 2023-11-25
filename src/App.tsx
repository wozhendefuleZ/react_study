import { useState, useEffect } from 'react';
import { Products } from '@/interfaces/app';
import { ListItems ,ObjectItem } from '@/components/ListItems';

function App() {
  useEffect(() => {
    console.log('进入');
  }, []); // 数组内有变量那么变动是会继续触发

  const products: Array<Products> = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
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

          <ObjectItem></ObjectItem>
        </div>
      </div>
    </>
  );
}

export default App;
