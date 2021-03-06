import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
///

import Layout from 'components/common/layout/layout';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Main from 'components/main/main';
import Modal from 'components/common/Modal/Modal';
import SingUpForm from 'components/common/SingUpForm';
import Notification from 'components/common/notification/Notification';

///

export default function IndexPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showSingUpModal, setShowSingUpModal] = useState(false);
  const [tgBotNotification, setTgBotNotification] = useState(false);

  const [notificationTitle, setNotificationTitle] = useState('');
  const [notificationDescription, setNotificationDescription] = useState('');
  const [accept, setAccept] = useState(true);

  const notification = (title, description, accept) => {
    setTgBotNotification(true);
    setNotificationTitle(title);
    setAccept(accept);
    setNotificationDescription(description);
    setTimeout(
      () => {
        setTgBotNotification(false);
      },
      accept ? 5000 : 7000,
    );
  };

  const toggleSingUpModal = () => {
    setShowSingUpModal(showModal => !showModal);
  };

  const { changeLanguage, language, path, defaultLanguage } = useI18next();
  const [elToScroll, setElToScroll] = useState(null);

  useEffect(() => {
    const lsLang = window.localStorage.getItem('gatsby-i18next-language');

    if (!lsLang) {
      changeLanguage(defaultLanguage);
      return;
    }

    if (!path.includes(language)) {
      changeLanguage(lsLang);
      return;
    }
  }, [changeLanguage, defaultLanguage, language, path]);

  return (
    <Layout>
      <Header getElToScroll={setElToScroll} />
      <Main
        onSingUpModalOpen={toggleSingUpModal}
        setSelectedProgram={setSelectedProgram}
        selectedProgram={selectedProgram}
      />
      <Footer elToScroll={elToScroll} />

      {showSingUpModal && (
        <Modal closeModal={toggleSingUpModal}>
          <SingUpForm
            closeModal={toggleSingUpModal}
            setSelectedProgram={setSelectedProgram}
            selectedProgram={selectedProgram}
            notification={notification}
          />
        </Modal>
      )}

      {tgBotNotification && (
        <Modal closeModal={() => setTgBotNotification(false)}>
          <Notification
            closeModal={() => setTgBotNotification(false)}
            content={{
              title: notificationTitle,
              description: notificationDescription,
            }}
            accept={accept}
          />
        </Modal>
      )}
    </Layout>
  );
}

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
