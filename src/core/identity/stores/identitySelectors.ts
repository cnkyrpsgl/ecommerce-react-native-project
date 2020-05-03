import {IdentityState} from './identityTypes';

interface AppState {
  identityState: IdentityState;
}

export default ({identityState}: AppState) => identityState;
