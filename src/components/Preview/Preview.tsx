import {
  LeftCircleOutlined,
  RightCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { useMemo } from 'react';

import './index.css';

const Preview = (props: any) => {
  const imgUrl = useMemo(() => {
    return props.images[props.index];
  }, [props.index]);
  const changeImage = (type: string) => {
    const fn: { [key: string]: () => any } = {
      prev: (): void => {
        if (props.index > 0) {
          props.changeIndex(props.index - 1);
        } else {
          props.changeIndex(props.images.length - 1);
        }
      },
      next: (): void => {
        if (props.index < props.images.length - 1) {
          props.changeIndex(props.index + 1);
        } else {
          props.changeIndex(0);
        }
      },
      change: (): void => {
        props.changeShow(!props.showPreview);
      },
    };

    fn[type]();
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50"></div>

      <LeftCircleOutlined
        className="cursor-pointer fixed left-40px text-40px text-#fff"
        onClick={() => changeImage('prev')}
      />

      <RightCircleOutlined
        className="cursor-pointer fixed right-40px text-40px text-#fff"
        onClick={() => changeImage('next')}
      />

      <CloseCircleOutlined
        className="cursor-pointer fixed  top-40px text-40px text-#fff  right-40px"
        onClick={() => changeImage('change')}
      />

      <div className="preview-container">
        <img
          src={imgUrl}
          className="max-h-100vh max-w-100vw select-none"
          alt="Preview Image"
        />
      </div>
    </div>
  );
};

export default Preview;
