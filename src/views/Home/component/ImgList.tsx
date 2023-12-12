// forwardRef 获取子组件得Dom
import { useRef, useState, forwardRef } from 'react';
import Preview from '@/components/Preview/Preview';
// flushSync 立即执行函数
import { flushSync } from 'react-dom';
type Img = {
  id: string;
  imageUrl: string;
};
const catList: Array<Img> = [];
for (let i = 0; i < 9; i++) {
  catList.push({
    id: i + '',
    imageUrl: 'https://placekitten.com/250/200?image=' + i,
  });
}

const imgaes = catList.map((e) => e.imageUrl);

export const CatFriends = () => {
  const selectedRef = useRef<any>(null);
  const [index, setIndex] = useState(0);

  const [showPreview, setShowPreview] = useState<boolean>(false);

  const changeShow = (e: boolean, i?: number) => {
    setShowPreview(e);
    if (i) setIndex(i);
  };
  return (
    <>
      <div className="w-full overflow-hidden my-20px">
        <div className="flex gap-20px">
          {catList.map((cat, i) => (
            <div key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                onClick={() => changeShow(true, i)}
                className={index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'猫猫 #' + cat.id}
              />
            </div>
          ))}
        </div>
      </div>

      {showPreview && (
        <Preview
          images={imgaes}
          index={index}
          showPreview={showPreview}
          changeIndex={(e: number) => {
            flushSync(() => {
              setIndex(e);
            });
            selectedRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'nearest',
              inline: 'center',
            });
          }}
          changeShow={(e: boolean) => changeShow(e)}
        ></Preview>
      )}
    </>
  );
};

export const SearchInp = forwardRef((props: any, ref: any) => {
  return (
    <>
      <input type="text" ref={ref} placeholder={props.text} />
    </>
  );
});
