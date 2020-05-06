import React from 'react';
import {View} from 'react-native';
import styles from '../styles/AddressEditSceneStyles';
import {TextInput} from 'react-native-paper';
import DarkActionButton from '../../../common/components/DarkActionButton';
import {useTranslation} from 'react-i18next';
import {useDarkModeContext} from 'react-native-dark-mode';

const AddressEditScene = () => {
  const {t} = useTranslation();
  const mode = useDarkModeContext();
  return (
    <View style={styles[mode].container}>
      <TextInput
        mode="outlined"
        label={t('Address Name')}
        placeholder="Please enter your address name here."
        theme={{colors: {placeholder: 'orange'}}}
        style={styles[mode].textInput}
      />
      <TextInput
        mode="outlined"
        label={t('Address Detail')}
        placeholder="Please enter your address detail here."
        theme={{colors: {placeholder: 'orange'}}}
        multiline={true}
        numberOfLines={5}
        style={styles[mode].textInput}
      />
      <View style={styles[mode].actionButtonContainer}>
        <DarkActionButton name={t('Save')} />
      </View>
    </View>
  );
};

export default AddressEditScene;
