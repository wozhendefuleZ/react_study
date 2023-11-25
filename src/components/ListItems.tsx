import { useState } from 'react';
import { Products, List } from '@/interfaces/app';
import { useImmer } from 'use-immer';

// 操作数组
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

// 操作对象
export const ObjectItem = () => {
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
