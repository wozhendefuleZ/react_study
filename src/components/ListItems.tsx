import { useState } from 'react';
import { Products, List } from '@/interfaces/app';
import { useImmer } from 'use-immer';

// 操作数组-useState and 组件通讯
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
      className={[
        e.isFruit ? 'text-red' : 'text-green',
        'mt-10px cursor-pointer',
      ].join(' ')}
    >
      {e.title}
    </div>
  ));

  return <>{productsList}</>;
};

// 操作数组-useImmer
export const ListImmer = () => {
  const products: Array<Products> = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: false, id: 3 },
  ];
  const [list, setList] = useImmer(products);

  const changeStatus = (e: Products) => {
    setList((draft) => {
      draft.find((v: Products) => {
        if (v.id == e.id) {
          v.isFruit = !e.isFruit;
        }
      });
    });
  };

  const productsList = list.map((e: Products) => (
    <div
      key={e.id}
      onClick={() => changeStatus(e)}
      className={[
        e.isFruit ? 'text-blue' : 'text-orange',
        'mt-10px cursor-pointer',
      ].join(' ')}
    >
      {e.title}
    </div>
  ));

  return <>{productsList}</>;
};

// 操作对象
export const ObjectItem = () => {
  // 操作对象-useState
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
    },
  });

  const changeName = (e: any) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const changeTitle = (e: any) => {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  };

  // 操作对象-useImmer
  const [people, setPeople] = useImmer({
    artwork: {
      city: 'city',
    },
  });
  const changeCity = (e: any) => {
    setPeople((v) => {
      v.artwork.city = e.target.value;
    });
  };
  return (
    <div className="mt-20px">
      <input type="text" onChange={changeName} value={person.name} />
      <input type="text" onChange={changeTitle} value={person.artwork.title} />
      <input type="text" onChange={changeCity} value={people.artwork.city} />

      <div>{person.name}</div>
      <div>{person.artwork.title}</div>
      <div>{people.artwork.city}</div>
    </div>
  );
};
