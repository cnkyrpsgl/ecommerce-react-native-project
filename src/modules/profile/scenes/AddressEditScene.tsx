import React from 'react';
import {View} from 'react-native';
import styles from '../styles/AddressEditSceneStyles';
import {TextInput} from 'react-native-paper';
import DarkActionButton from '../../../common/components/DarkActionButton';
import {useTranslation} from 'react-i18next';

const AddressEditScene = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={t('Address Name')}
        placeholder="Please enter your address name here."
        theme={{colors: {placeholder: 'orange'}}}
        style={{marginVertical: '3%'}}
      />
      <TextInput
        mode="outlined"
        label={t('Address Detail')}
        placeholder="Please enter your address detail here."
        theme={{colors: {placeholder: 'orange'}}}
        multiline={true}
        numberOfLines={5}
        style={{marginVertical: '3%'}}
      />
      <View style={styles.actionButtonContainer}>
        <DarkActionButton name={t('Save')} />
      </View>
    </View>
  );
};

export default AddressEditScene;
