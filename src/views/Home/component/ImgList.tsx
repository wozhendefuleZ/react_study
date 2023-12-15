// forwardRef 获取子组件得Dom
import { useRef, useState, forwardRef } from 'react';
import Preview from '@/components/Preview/Preview';
// flushSync 立即执行函数
import { flushSync } from 'react-dom';
type Img = {
  id: string;
  imageUrl: string;
};
const catList: Array<Img> = [
  {
    id: '1',
    imageUrl:
      'https://image.qwq.link/images/2023/12/15/twitter_nezi--fevercellnenecrepe_20231201-122224_1730562994365767967_photo.md.jpg',
  },
  {
    id: '2',
    imageUrl:
      'https://image.qwq.link/images/2023/11/24/twitter_namaedousiyoka_20231119-025600_1726071798096175496_photo.md.jpg',
  },
  {
    id: '3',
    imageUrl:
      'https://image.qwq.link/images/2023/11/24/twitter_Itecsan927_20231119-084137_1726158775680372974_photo.md.jpg',
  },
  {
    id: '4',
    imageUrl:
      'https://image.qwq.link/images/2023/11/24/twitter_Sig_Guitar_20231116-164738_1725193922782380474_photo.md.jpg',
  },
];

const imgaes = catList.map((e) => e.imageUrl);

export const CatFriends = () => {
  const selectedRef = useRef<any>(null);
  const [index, setIndex] = useState(0);

  const [showPreview, setShowPreview] = useState<boolean>(false);

  const changeShow = (e: boolean, i: number) => {
    setShowPreview(e);
    setIndex(i);
  };
  return (
    <>
      <div className="w-full overflow-hidden my-20px">
        <div className="flex gap-20px">
          {catList.map((cat, i) => (
            <div key={cat.id} ref={index === i ? selectedRef : null}>
              <img
                onClick={() => changeShow(true, i)}
                className={[
                  index === i ? 'active' : '',
                  'w-250px h-200px object-cover',
                ].join(' ')}
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
          changeShow={(e: boolean, v: number) => changeShow(e, v)}
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
