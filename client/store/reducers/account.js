import {Map} from 'immutable';
import {account} from "../actions/types";

export default function (state = Map({}), action) {
  switch (action.types) {
    // case account.display:
    //   return {
    //     page: action.page,
    //     status: action.status,
    //     statusText: action.statusText,
    //     content: action.content,
    //     time: Date.now()
    //   };
    // case account.more:
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