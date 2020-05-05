import React from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {Formik} from 'formik';
import DarkActionButton from '../../../common/components/DarkActionButton';
import styles from '../styles/AccountSceneStyles';
import {useSelector} from 'react-redux';
import {identitySelectors} from '../../../core/identity/stores';
import {User} from '../../../core/identity/stores/identityTypes';
import {number, object, string} from 'yup';
import {useTranslation} from 'react-i18next';

const validationSchema = object().shape<User>({
  id: number().required(),
  name: string().required('Lütfen adınızı giriniz'),
  lastName: string().required('Lütfen soyadınızı giriniz'),
  email: string()
    .email('Email formatını kontrol ediniz')
    .required('Lütfen email adresinizi giriniz'),
  phoneNumber: string()
    .min(10, 'Telefon numarası 10 karakterden oluşmalıdır')
    .max(10, 'Telefon numarası 10 karakterden oluşmalıdır')
    .required('Lütfen telefon numarasını giriniz')
});

const AccountScene = () => {
  const {t} = useTranslation();
  const {user} = useSelector(identitySelectors);
  return (
    <Formik<User>
      validationSchema={validationSchema}
      initialValues={{...user}}
      onSubmit={() => {}}>
      {() => (
        <>
          <View style={styles.container}>
            <TextInput
              mode="outlined"
              label={t('Name')}
              placeholder="Please enter your name here."
              style={styles.input}
              theme={{colors: {placeholder: 'orange'}}}
              value={user.name}
            />
            <TextInput
              mode="outlined"
              label={t('Surname')}
              placeholder="Please enter your surname here."
              style={styles.input}
              theme={{colors: {placeholder: 'orange'}}}
              value={user.lastName}
            />
            <TextInput
              mode="outlined"
              label={t('Email')}
              placeholder="Please enter your email here."
              style={styles.input}
              theme={{colors: {placeholder: 'orange'}}}
              value={user.email}
            />
            <TextInput
              mode="outlined"
              label={t('Phone')}
              placeholder="Please enter your phone number here."
              style={styles.input}
              theme={{colors: {placeholder: 'orange'}}}
              value={user.phoneNumber}
            />
          </View>
          <View style={styles.actionContainer}>
            <DarkActionButton name={t('Save')} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default AccountScene;
