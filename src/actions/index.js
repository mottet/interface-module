import { v4 } from 'node-uuid';

export const selectMode = (mode, id = -1) =>
  ({
    type: 'SELECT_MODE',
    mode,
    id
  })

export const addModule = (moduleName) =>
({
  type: 'ADD_MODULE',
  moduleName,
  lessonsList: [{"id":v4(), "lesson": "New lesson"}]
})

export const editModule = (moduleName, lessonsList, id) =>
({
  type: 'EDIT_MODULE',
  moduleName,
  lessonsList,
  id
})

export const deleteModule = (id) =>
({
  type: 'DELETE_MODULE',
  id
})

export const addLesson = (lessonName, idModule) =>
({
  type: 'ADD_LESSON',
  id: v4(),
  lessonName,
  idModule
})

export const deleteLesson = (id, idModule) =>
({
  type: 'DELETE_LESSON',
  id,
  idModule
})