import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView, useWindowDimensions} from 'react-native';
import ProductCategory from '../components/ProductCategory';
import CarouselCard from '../components/CarouselCard';
import paginationStyles from '../styles/PaginationStyles';
import {useSelector} from 'react-redux';
import {campaignSelectors} from '../../../core/campaign/stores';
import {useDarkModeContext} from 'react-native-dark-mode';
import styles from '../styles/HomeSceneStyles';

const HomeScene = () => {
  const mode = useDarkModeContext();

  const windowWidth = useWindowDimensions().width;

  const [activeSlide, setActiveSlide] = useState(0);

  const {banners} = useSelector(campaignSelectors);

  return (
    <ScrollView style={styles[mode].container}>
      <Carousel
        data={banners}
        renderItem={({item}) => <CarouselCard {...item} />}
        sliderWidth={windowWidth}
        itemWidth={windowWidth * 1.3}
        loop={true}
        autoplay={true}
        autoplayInterval={5000}
        lockScrollWhileSnapping={true}
        onSnapToItem={(index) => setActiveSlide(index)}
        inactiveSlideScale={0.5}
      />
      <Pagination
        dotsLength={banners.length}
        activeDotIndex={activeSlide}
        dotStyle={paginationStyles.dot}
        inactiveDotColor="red"
        dotColor="red"
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <ProductCategory />
    </ScrollView>
  );
};

export default HomeScene;
