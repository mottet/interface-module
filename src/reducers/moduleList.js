import { v4 } from 'node-uuid';

const moduleList = (state = [], action) => {
  let index;
  switch (action.type) {
    case 'ADD_MODULE':
      return [
        ...state,
        {
          "id": v4(),
          "moduleName": action.moduleName,
          "lessonsList": action.lessonsList
        }
      ]
    case 'EDIT_MODULE':
      index = state.findIndex((val)=> val.id === action.id)
      return [
        ...state.slice(0, index),
        {
          "id": action.id,
          "moduleName": action.moduleName,
          "lessonsList": action.lessonsList
        },
        ...state.slice(index + 1)
      ]
    case 'DELETE_MODULE':
      index = state.findIndex((val)=> val.id === action.id)
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    case 'ADD_LESSON':
      index = state.findIndex((val)=> val.id === action.idModule)
      return [
        ...state.slice(0, index),
        {
          "id": state[index].id,
          "moduleName": state[index].moduleName,
          "lessonsList": [...state[index].lessonsList,
            {
              id: action.id,
              lesson: action.nameLesson
            }
          ]
        },
        ...state.slice(index + 1)
      ]
    case 'DELETE_LESSON':
      index = state.findIndex((val)=> val.id === action.idModule)
      let indexLesson = state[index].lessonsList.findIndex((val)=> val.id === action.id)
      return [
        ...state.slice(0, index),
        {
          "id": state[index].id,
          "moduleName": state[index].moduleName,
          "lessonsList": [
            ...state[index].lessonsList.slice(0, indexLesson),
            ...state[index].lessonsList.slice(indexLesson + 1)
          ]
        },
        ...state.slice(index + 1)
      ]
    default:
      return state
  }
}

export default moduleList