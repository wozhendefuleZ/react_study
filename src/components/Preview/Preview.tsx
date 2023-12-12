import {
  LeftCircleOutlined,
  RightCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import React, { useMemo, useState } from 'react';

import './index.css';

const Preview = (props: any) => {
  const imgUrl = useMemo(() => {
    return props.images[props.index];
  }, [props.index]);
  const [scale, setScale] = useState(1); // 初始缩放比例为1
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

  const handleWheel = (event: React.WheelEvent<HTMLImageElement>) => {
    event.preventDefault();

    // 滚轮向上滚动，放大图片
    if (event.deltaY < 0) {
      setScale((prevScale) => prevScale * 1.1); // 可以根据需要调整缩放系数
    }
    // 滚轮向下滚动，缩小图片
    else {
      setScale((prevScale) => prevScale / 1.1); // 可以根据需要调整缩放系数
    }

    // 限制最小和最大缩放比例，以防图片过大或过小
    if (scale < 0.1) {
      setScale(0.1);
    }
    if (scale > 3) {
      setScale(3);
    }
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
          style={{ transform: `scale(${scale})` }}
          src={imgUrl}
          className="max-h-100vh max-w-100vw select-none"
          alt="Preview Image"
          onWheel={handleWheel} // 监听滚轮事件
        />
      </div>
    </div>
  );
};

export default Preview;
