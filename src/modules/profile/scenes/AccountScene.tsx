import React from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
import {Formik} from 'formik';
import BoldActionButton from '../../../common/components/BoldActionButton';

interface UserUpdateRequest {
  name: string;
  lastName: string;
  email: string;
  phoneNumber: number;
}

const AccountScene = () => {
  return (
    <Formik<UserUpdateRequest>
      initialValues={{name: '', lastName: '', email: '', phoneNumber: 0}}
      onSubmit={() => {}}>
      {() => (
        <>
          <View
            style={{
              marginHorizontal: '10%',
              flex: 0.8,
              justifyContent: 'flex-start'
            }}>
            <TextInput
              mode="outlined"
              label="Name"
              placeholder="Please enter your name here."
              style={{marginVertical: '5%'}}
              theme={{colors: {placeholder: 'orange'}}}
            />
            <TextInput
              mode="outlined"
              label="Surname"
              placeholder="Please enter your surname here."
              style={{marginVertical: '5%'}}
              theme={{colors: {placeholder: 'orange'}}}
            />
            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Please enter your email here."
              style={{marginVertical: '5%'}}
              theme={{colors: {placeholder: 'orange'}}}
            />
            <TextInput
              mode="outlined"
              label="Phone"
              placeholder="Please enter your phone number here."
              style={{marginVertical: '5%'}}
              theme={{colors: {placeholder: 'orange'}}}
            />
          </View>
          <View
            style={{
              flex: 0.4,
              justifyContent: 'center',
              marginHorizontal: '10%'
            }}>
            <BoldActionButton name={'Save'} />
          </View>
        </>
      )}
    </Formik>
  );
};

export default AccountScene;
