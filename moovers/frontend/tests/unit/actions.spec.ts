import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { UserRegisterData, UserLoginData, UserWithToken, AddressData } from '@/types/interfaces';
import axios from 'axios';
import {
  configActionContextAndState,
  configActionContext,
  configActionContextDispatch,
} from '../test-utils';

import state from '../unit/mockState';

jest.mock('axios');
const mockedAxios2 = axios as unknown as jest.Mock
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest. MockedFunction<Commit>;
const dispatch = jest.fn() as jest. MockedFunction<Dispatch>;

describe('Given an object of actions', () => {
  test('Register a new user successfully', async () => {
    mockedAxios.post.mockResolvedValue({
      data: {createdUser:{
          email: '@',
          password:'123'
      }},
    });
    const userData = {
        name: '',
        profession: '',
        city: '',
        email: '',
        password: '',} as UserRegisterData

    await actions.register(configActionContextDispatch(dispatch), userData);

    expect(dispatch).toHaveBeenCalled();
  })
  test('Login a user successfully', async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });
    const userData = {} as UserLoginData

    await actions.login(configActionContextDispatch(dispatch), userData);

    expect(dispatch).toHaveBeenCalled();
  })
  test('Load user from LocalStorage successfully',  () => {
      const localStorageUser = {
          email: '@',
          passwrod:'123'
      }
      JSON.parse = jest.fn().mockImplementationOnce(() => localStorageUser);
      
    actions.getUserFromLocalStorage(configActionContextDispatch(dispatch));

    expect(dispatch).toHaveBeenCalled();
  })
  test('Load user from Api successfully', async () => {
    mockedAxios2.mockResolvedValue({
      data: {
          token:'',
          refreshToken:'',
          _id: '',
          email:'@',
          password:'123',
          firstName:'',
          lastName: '',
          trips: [],
          favorites:[]
      },
    });

    await actions.userLogedFromApi(configActionContext(commit), {
        token:'',
        refreshToken:'',
        _id: '',
        email:'@',
        password:'123',
        firstName:'',
        lastName: '',
        trips: [],
        favorites:[]
    });

    expect(commit).toHaveBeenCalled();
  })
  test('Delete user from localStorage', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });
    
    await actions.deleteDataFromLocalStorage(configActionContext(commit));

    expect(commit).toHaveBeenCalled();
  })
  test('Get address from gelocate from google', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
          results:[{}]
      },
    });
    const coordinates = {}

    await actions.getAddressFrom(configActionContext(commit), coordinates);

    expect(commit).toHaveBeenCalled();
  })
  test('Add to favorites', async () => {
    mockedAxios2.mockResolvedValue({
      data: [],
    });
    const addressData = {} as AddressData

    await actions.addToFavorites(configActionContext(commit), addressData);

    expect(commit).toHaveBeenCalled();
  })
  test('Add to favorites', async () => {
    mockedAxios2.mockResolvedValue({
      data: [],
    });
    const addressData = {} as AddressData

    await actions.addToFavorites(configActionContext(dispatch), addressData);

    expect(dispatch).toHaveBeenCalled();
  })
  test('Delete from favorites', async () => {
    mockedAxios2.mockResolvedValue({
      data: {},
    });
    const addressData = {} as AddressData

    await actions.deleteInFavorites(configActionContext(commit), addressData);

    expect(commit).toHaveBeenCalled();
  })
  test('Delete from favorites', async () => {
    mockedAxios2.mockResolvedValue({
      data: {},
    });
    const addressData = {} as AddressData

    await actions.deleteInFavorites(configActionContext(dispatch), addressData);

    expect(dispatch).toHaveBeenCalled();
  })
  test('Create a trip', async () => {
    mockedAxios2.mockResolvedValue({
      data: {},
    });
    const tripData = {} as any

    await actions.createTrip(configActionContext(commit), tripData);

    expect(commit).toHaveBeenCalled();
  })
  test('Create cart', async () => {
    mockedAxios2.mockResolvedValue({
      data: {},
    });
    const cartData = {} as any

    await actions.createCart(configActionContext(dispatch), cartData);

    expect(dispatch).toHaveBeenCalled();
  })
  test('Get one cart', async () => {
    mockedAxios2.mockResolvedValue({
      data: {},
    });
    const cartData = {} as any

    await actions.getOneCart(configActionContext(commit), cartData);

    expect(commit).toHaveBeenCalled();
  })
  
})