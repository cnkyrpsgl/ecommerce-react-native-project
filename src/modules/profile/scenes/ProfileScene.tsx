import React, {useState} from 'react';
import {FlatList, useWindowDimensions, View} from 'react-native';
import Modal from 'react-native-modal';
import styles, {modalStyles} from '../styles/ProfileSceneStyles';
import {profileMenuData} from '../constants';
import ProfileMenuItem from '../components/ProfileMenuItem';
import ActionButton from '../../../common/components/ActionButton';
import {useTranslation} from 'react-i18next';
import LanguageOptions from '../components/LanguageOptions';
import {useDarkModeContext} from 'react-native-dark-mode';

const ProfileScene = ({navigation}: {navigation: any}) => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const openLanguageModal = () => setLanguageModalVisible(true);
  const closeLanguageModal = () => setLanguageModalVisible(false);
  const windowHeight = useWindowDimensions().height;
  return (
    <>
      <View style={styles[mode].container}>
        <FlatList
          data={profileMenuData}
          keyExtractor={(item) => item.title}
          renderItem={({item}) => (
            <ProfileMenuItem
              {...item}
              onPress={() => navigation.navigate(item.scene)}
            />
          )}
          contentContainerStyle={styles[mode].contentContainer}
        />
        <ActionButton title={t('Change Language')} action={openLanguageModal} />
        <ActionButton title={t('Log Out')} action={() => {}} />
      </View>
      <Modal
        isVisible={languageModalVisible}
        swipeDirection={'down'}
        onBackdropPress={closeLanguageModal}
        style={[modalStyles[mode].container, {marginTop: windowHeight * 0.6}]}>
        <LanguageOptions action={closeLanguageModal} />
      </Modal>
    </>
  );
};

export default ProfileScene;
