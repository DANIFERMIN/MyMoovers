import { State } from '@/types/interfaces';
import { Commit, Dispatch } from 'vuex';

const configActionContextAndState = (commit: Commit, state: State): any => ({
  commit,
  state,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContextDispatch = (dispatch: Dispatch): any => ({
  commit: jest.fn(),
  dispatch,
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

export {
  configActionContext,
  configActionContextAndState,
  configActionContextDispatch,
};