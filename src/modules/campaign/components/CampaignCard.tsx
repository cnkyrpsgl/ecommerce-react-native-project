import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';
import styles from '../styles/CampaignCardStyles';

const CampaignCard = ({imgSource}: {imgSource: ImageSourcePropType}) => {
  return <Image source={imgSource} style={styles.image} />;
};

export default CampaignCard;
