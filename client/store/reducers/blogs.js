import {Map} from 'immutable';
import {blogs} from "../actions/types";

export default function (state = Map({}), action) {
  switch (action.types) {
    // case blogs.loginByAuthorization:
    //   return {
    //     page: action.page,
    //     status: action.status,
    //     statusText: action.statusText,
    //     content: action.content,
    //     time: Date.now()
    //   };
    // case blogs.more:
    //   return {
    //     page: action.page,
    //     status: action.status,
    //     statusText: action.statusText,
    //     content: state.content.concat(action.content),
    //     time: Date.now()
    //   };
    default:
      return state;
  }
}