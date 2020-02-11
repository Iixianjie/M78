import React from 'react';
import ImagePreview from '@lxjx/flicker/lib/image-preview';
import '@lxjx/flicker/lib/viewer/style';

import img1 from '@/src/mock/img/1.jpg';
import img2 from '@/src/mock/img/2.jpg';
import img3 from '@/src/mock/img/3.jpg';
import img4 from '@/src/mock/img/4.jpg';
import img5 from '@/src/mock/img/5.jpg';
import img6 from '@/src/mock/img/6.jpg';
import img7 from '@/src/mock/img/7.jpg';

const option = [
  {
    img: img1,
    desc: '图片1图片1图片1图片1图片1图片1',
  },
  {
    img: img2,
  },
  {
    img: img3,
    desc: '图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3',
  },
  {
    img: img4,
  },
  {
    img: img5,
    desc: '图片1图片1图片1图片1图片1图片1',
  },
  {
    img: img6,
  },
  {
    img: img7,
    desc: '图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3图片3',
  },
];

const imgStyle: React.CSSProperties = {
  width: 100,
  height: 100,
  objectFit: 'cover',
  margin: 2,
  borderRadius: '4px',
};

const Demo = () => {
  return (
    <div>
      {option.map((item, ind) => (
        <img
          key={ind}
          style={imgStyle}
          src={item.img}
          alt=""
          onClick={() => {
            ImagePreview.api({
              images: option,
              page: ind,
            });
          }}
        />
      ))}
    </div>
  );
};

export default Demo;