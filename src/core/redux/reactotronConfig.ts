import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotronSupplier = () =>
  Reactotron.configure({name: 'starter'})
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

export default reactotronSupplier;
