import React, { useContext } from 'react';
// Если в нашем компоненте нужно выполнить или нет рендеринг в зависимости от ширины экрана, берём испортируем контекст и формат. А такэе useContext
import { PageFormatContext, format } from 'context/pageFormatContext';
import * as s from './content.module.scss';

import SnakeArrowMobile from 'images/svg/header-snake-arrow-mobile.svg';
import SnakeArrow from 'images/svg/header-snake-arrow.svg';
import DashedLine from 'images/svg/header-dashed-arc.svg';

import Button from 'components/common/button/button';
import List from './list/list';

const Content = () => {
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;

  return (
    <div className={s.contentBlock}>
      <h1 className={s.sectionTitle}>
        EMS-тренировки <br />в центре Киева
      </h1>
      <p className={s.text1}>
        Создайте идеальную форму, занимаясь по 30 минут:
      </p>
      {(isDesktop || isTablet) && <List />}
      <Button classType={1} type={'button'} />
      {!isDesktop && !isTablet ? (
        <SnakeArrowMobile
          className={s.snakeArrowMobIcon}
          width={90}
          height={90}
        />
      ) : (
        <SnakeArrow className={s.snakeArrowIcon} width={90} height={90} />
      )}
      <p className={s.text2}>
        Записывайтесь на пробную <br />
        тренировку за
        <span className={s.text2_span}>750 грн.</span>
      </p>
      <p className={s.price}>750 грн.</p>
      <DashedLine className={s.dashedLine} width={181} height={22} />
      {!isDesktop && !isTablet && <List />}
    </div>
  );
};

export default Content;
