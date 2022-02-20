import React, { useContext } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Button from 'components/common/button/button';
import List from './list/list';
import * as s from './content.module.scss';

const Content = () => {
  const pageFormat = useContext(PageFormatContext);
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  const { t } = useI18next();
  const data = t('hero', { returnObjects: true });

  return (
    <div className={s.contentBlock}>
      <h1 className={s.sectionTitle}>{data.title}</h1>
      <p className={s.text1}>{data.text1}</p>
      {(isDesktop || isTablet) && <List data={data.list} />}
      {isDesktop || isTablet ? (
        <Button classType={1} type={'button'} />
      ) : (
        <Button classType={4} type={'button'} />
      )}

      <div className={s.offerBlock}>
        <p className={s.text2}>
          {data.text2}
          <span className={s.text2_span}>750 грн.</span>
        </p>
        <p className={s.price}>350 грн.</p>
      </div>

      {!isDesktop && !isTablet && <List data={data.list} />}
    </div>
  );
};

export default Content;
