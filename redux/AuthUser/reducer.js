import {Log_in, Log_out} from "./types";

const initState = {
  login: false,
};

export const IsAuth = (state = initState, {type, payload}) => {
  switch (type) {
    case Log_in: {
      return {
        ...state,
        login: payload,
      };
    }
    case Log_out: {
      return {
        ...state,
        login: payload,
      };
    }
    default: {
      return state;
    }
  }
};
