import React from 'react';
import PropTypes from 'prop-types';

import { section, title, dark, lightTitle } from './section.module.scss';
import Container from '../container/container';
import Title from '../title/title';

// head - принимает текст заголовка секции
// titleLevel - можно задать тот уровень заголовка, который нужен для секции (h1, h2, h3 и т.д.)
// titleHidden - оставляет заголовок, но делает его невидимым
// pt и pb - необязательные параметры, которые указываются для кастомизации нижнего и верхнего падинга секции
// darkBackground - true - если нужно сделать фон черным, а цвет заголовка белым

const Section = ({
  head,
  titleLevel,
  titleHidden = false,
  children,
  pt,
  pb,
  darkBackground = false,
  sectionClass,
  containerClass,
  id,
}) => {
  const getStyles = () => {
    const padTop = pt ? { paddingTop: `${pt}px` } : {};
    const padBot = pb ? { paddingTop: `${pb}px` } : {};
    return { ...padTop, ...padBot };
  };

  return (
    <section
      id={id}
      className={`${section} ${darkBackground ? dark : ''} ${
        sectionClass ? sectionClass : ''
      }`}
      // style={{ paddingTop: `${pt}px`, paddingBottom: `${pb}px` }}
      style={getStyles()}
    >
      <Container addClass={containerClass}>
        {head && (
          <Title
            tagName={titleLevel}
            className={`${title} ${titleHidden && 'visually-hidden'} ${
              darkBackground && lightTitle
            }`}
          >
            {head}
          </Title>
        )}
        {children}
      </Container>
    </section>
  );
};

export default Section;

Section.propTypes = {
  head: PropTypes.string,
  children: PropTypes.node,
  titleLevel: PropTypes.string,
  titleHidden: PropTypes.bool,
  pt: PropTypes.number,
  pb: PropTypes.number,
  darkBackground: PropTypes.bool,
  id: PropTypes.string,
};
