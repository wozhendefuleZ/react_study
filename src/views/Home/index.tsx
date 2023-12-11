import { useState, useRef } from 'react';
import { Products } from '@/interfaces/app';
import { ListItems } from '@/views/Home/component/ListItems';
import { SearchInp, CatFriends } from '@/views/Home/component/ImgList';

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
      <div className="mt-20px">
        <button onClick={() => inpDom.current.focus()}>获取焦点</button>
        <SearchInp ref={inpDom} text={'请输入'}></SearchInp>
        <div className="w-800px">
          <CatFriends></CatFriends>
        </div>
      </div>
    </>
  );
};

export default Home;
