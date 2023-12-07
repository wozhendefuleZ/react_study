import { useState, useRef } from 'react';
import { Products } from '@/interfaces/app';
import { ListItems } from '@/components/ListItems';
import { SearchInp } from '@/components/ImgList';

const Home = () => {
  const products: Array<Products> = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: true, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const [list, setList] = useState(products);
  const inpDom = useRef<any>(null);
  return (
    <>
      <ListItems
        list={list}
        listClick={(e: Array<Products>) => setList(e)}
      ></ListItems>
      <div className="w-500px mt-20px">
        <button onClick={() => inpDom.current.focus()}>获取焦点</button>
        <SearchInp ref={inpDom} text={'请输入'}></SearchInp>
      </div>
    </>
  );
};

export default Home;
