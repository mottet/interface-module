import { combineReducers } from 'redux';
import moduleList from './moduleList';
import selectMode from './selectMode';

const moduleApp = combineReducers({
  moduleList,
  selectMode
})

export default moduleApp