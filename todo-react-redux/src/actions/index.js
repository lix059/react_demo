export const addTodo = text => ({
  type: 'ADD_TODO',
  id: getId(),
  text
})

export const delTodo = id => ({
  type: 'DEL_TODO',
  id
})

export const editTodo = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const setEditingTodo = id => ({
  type: 'SET_EDITING_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ClearCompleted = {
  CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}


function getId() {
  var i, random;
  var uuid = '';
  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
      .toString(16);
  }
  return uuid;
}
