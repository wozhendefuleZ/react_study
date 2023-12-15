import { useState, useRef } from 'react';
import { Products } from '@/interfaces/app';
import { ListItems } from '@/views/Home/component/ListItems';
import { SearchInp, CatFriends } from '@/views/Home/component/ImgList';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import Dialog from '@/components/Dialog/Dialog';

function DialogContent() {
  return <div className="flex-auto grid place-items-center shadow"></div>;
}
function DialogTitle() {
  return (
    <>
      <div className="flex gap-[5px] items-center">
        <span className="text-[18px]">自定义dialog</span>
      </div>
      <div className="ml-auto">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={Dialog.closeDialog}
        >
          <Icon
            icon="heroicons:x-circle-20-solid"
            className="text-[25px] text-red-500 cursor-pointer"
          />
        </motion.div>
      </div>
    </>
  );
}

const Home = () => {
  const products: Array<Products> = [
    { title: 'Cabbage', isFruit: true, id: 1 },
    { title: 'Garlic', isFruit: true, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  const [list, setList] = useState(products);
  const inpDom = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

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

      <motion.button
        ref={buttonRef}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white text-[12px] p-[6px_18px] bg-green-500 rounded-md shadow-lg shadow-green-500/70 select-none"
        onClick={() => {
          if (buttonRef.current) buttonRef.current.blur();
          Dialog.show(<DialogContent />, <DialogTitle />);
        }}
      >
        click here~
      </motion.button>
    </>
  );
};

export default Home;
