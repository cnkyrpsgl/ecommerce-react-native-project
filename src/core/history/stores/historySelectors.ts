import {HistoryState} from './historyTypes';

interface AppState {
  historyState: HistoryState;
}

export default ({historyState}: AppState) => historyState;
