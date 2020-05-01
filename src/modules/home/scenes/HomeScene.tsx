import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {ScrollView, useWindowDimensions} from 'react-native';
import ProductCategory from '../components/ProductCategory';
import {carouselData} from '../constants';
import CarouselCard from '../components/CarouselCard';

const HomeScene = () => {
  const windowWidth = useWindowDimensions().width;
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <ScrollView>
      <Carousel
        data={carouselData}
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
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'white'
        }}
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
