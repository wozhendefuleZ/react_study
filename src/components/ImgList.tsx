import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';

export function CatFriends() {
  const selectedRef = useRef<any>(null);
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="flex justify-center my-20px">
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1);
              } else {
                setIndex(0);
              }
            });
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
        >
          下一步
        </button>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex gap-20px">
          {catList.map((cat, i) => (
            <div key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'猫猫 #' + cat.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

type Img = {
  id: string;
  imageUrl: string;
};
const catList: Array<Img> = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i + '',
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}
