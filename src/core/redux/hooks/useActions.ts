import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators} from 'redux';

function useActions<T extends ActionCreatorsMapObject>(actions: T): T {
  const dispatch = useDispatch();
  return useMemo((): T => bindActionCreators(actions, dispatch), [
    actions,
    dispatch
  ]);
}

export default useActions;
