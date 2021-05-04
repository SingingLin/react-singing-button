import React from 'react';
import '@/src/assets/styles/image.scss';
import testJpegSrc from '@/src/assets/images/twnine.jpeg';
import testPngSrc from '@/src/assets/images/game1.png';
import testJpgSrc from '@/src/assets/images/redBg.jpg';
import testSvgSrc from '@/src/assets/images/smile.svg';

const HelloWorld = (): JSX.Element => {
  return (
    <>
      <p className={'font-l'}>HelloWorld</p>
      <hr />
      <h5>image test</h5>
      <p>jpeg test</p>
      <div className={'image-container'}>
        <img src={testJpegSrc} />
      </div>
      <p>jpg test</p>
      <div className={'image-container'}>
        <img src={testJpgSrc} />
      </div>
      <p>png test</p>
      <div className={'image-container'}>
        <img src={testPngSrc} />
      </div>
      <p>svg test</p>
      <div className={'image-container'}>
        <img src={testSvgSrc} />
      </div>
      <hr />
      <h5>bg image test</h5>
      <div className={'testJpegSrc'}></div>
      <div className={'testJpgSrc'}></div>
      <div className={'testPngSrc'}></div>
      <div className={'testSvgSrc'}></div>
    </>
  );
};

export default HelloWorld;
