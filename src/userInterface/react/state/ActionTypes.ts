enum ActionTypes {
  // CLEAN
  CLEAN_MEETUP_STATE = 'CLEAN_MEETUP_STATE',
  // GET_ALL
  GET_ALL_MEETUPS = 'GET_ALL_MEETUPS',
  GET_ALL_MEETUPS_FAILURE = 'GET_ALL_MEETUPS_FAILURE',
  GET_ALL_MEETUPS_SUCCESS = 'GET_ALL_MEETUPS_SUCCESS',
  // CREATE_NEW
  CREATE_NEW_MEETUP = 'CREATE_NEW_MEETUP',
  CREATE_NEW_MEETUP_FAILURE = 'CREATE_NEW_MEETUP_FAILURE',
  CREATE_NEW_MEETUP_SUCCESS = 'CREATE_NEW_MEETUP_SUCCESS',
  // ADD_TO_FAVORITES
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  ADD_TO_FAVORITES_FAILURE = 'ADD_TO_FAVORITES_FAILURE',
  ADD_TO_FAVORITES_SUCCESS = 'ADD_TO_FAVORITES_SUCCESS',
  // REMOVE_FROM_FAVORITES
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
  REMOVE_FROM_FAVORITES_FAILURE = 'REMOVE_FROM_FAVORITES_FAILURE',
  REMOVE_FROM_FAVORITES_SUCCESS = 'REMOVE_FROM_FAVORITES_SUCCESS',
}

export default ActionTypes;
