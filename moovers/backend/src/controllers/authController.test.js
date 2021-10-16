/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const authController = require('./authController');
const User = require('../models/userModel');

jest.mock('../models/userModel');
jest.mock('jsonwebtoken');

describe('authController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given registerUser', () => {
    beforeEach(() => {
      req = {
        user: {},
        body: {
          firstName: 'Daniela',
          lastName: 'Fermin'
        }
      };
    });
    describe('When is invoked', () => {
      describe('And User.create resolves', () => {
        test('Then res.json is called', async () => {
          User.create.mockResolvedValue({});

          await authController.registerUser(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.create rejects', () => {
        test('Then res.status with 500', async () => {
          User.create.mockRejectedValue({});

          await authController.registerUser(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          User.create.mockRejectedValue(new Error('CREATE_ERROR'));

          await authController.registerUser(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });

  describe('Given loginUser', () => {
    beforeEach(() => {
      req = {
        user: {
          _id: 'hjwkdywdwyefckwdfkw',
          email: 'fermin@gmail.com',
          firstName: 'Daniela',
          lastName: 'Fermin'
        }
      };
      res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn()
      };
    });
    describe('When is invoked', () => {
      test('Then res.json is called', () => {
        jwt.sign = jest.fn()
          .mockReturnValueOnce('token')
          .mockReturnValueOnce('refreshToken');

        authController.loginUser(req, res);

        expect(res.json).toHaveBeenCalled();
      });
    });
  });

  describe('Given refreshUserToken', () => {
    beforeEach(() => {
      req = {
        body: {

        }
      };
      res = {
        json: jest.fn(),
        sendStatus: jest.fn()
      };
    });

    describe('When invoked', () => {
      describe('And no refreshToken', () => {
        test('Then res.sendStatus is called with 401', () => {
          authController.refreshUserToken(req, res);

          expect(res.sendStatus).toHaveBeenCalledWith(401);
        });
      });
      describe('And refreshTokens doesnt include ', () => {
        test('Then res.status with 403', () => {
          authController.setRefreshToken(' ');
          const mockUser = {
            _id: 'jdiuhekfd',
            email: 'email',
            firstName: 'Daniela',
            lastName: 'Fermin'
          };
          req = {
            body: {
              refreshToken: 'hljfshfyelifuelfjs'
            },
            user: {
              _id: mockUser._id,
              email: mockUser.email,
              firstName: mockUser.firstName,
              lastName: mockUser.lastName
            }
          };
          res = {
            json: jest.fn(),
            sendStatus: jest.fn()
          };
          authController.refreshUserToken(req, res);

          expect(res.sendStatus).toHaveBeenCalledWith(403);
        });
      });
      describe('And theres a refreshToken', () => {
        test('Then jwt.verify shoud be called', () => {
          authController.setRefreshToken('hljfshfyelifuelfjs');
          const mockUser = {
            _id: 'jdiuhekfd',
            email: 'email',
            firstName: 'Daniela',
            lastName: 'Fermin'
          };
          req = {
            body: {
              refreshToken: 'hljfshfyelifuelfjs'
            },
            user: {
              _id: mockUser._id,
              email: mockUser.email,
              firstName: mockUser.firstName,
              lastName: mockUser.lastName
            }
          };
          res = {
            json: jest.fn(),
            sendStatus: jest.fn()
          };
          jwt.verify = jest.fn();
          jwt.sign = jest.fn()
            .mockReturnValueOnce('token')
            .mockReturnValueOnce('refreshToken');

          authController.refreshUserToken(req, res);

          expect(jwt.verify).toHaveBeenCalled();
        });
      });
    });
  });
  describe('Given logoutUser', () => {
    beforeEach(() => {
      req = {
        user: {},
        body: {
          refreshToken: 'wejkfhowefoewifj'
        }
      };
      res = {
        send: jest.fn()
      };
    });
    describe('When is invoked', () => {
      test('Then res.send is called', () => {
        authController.logoutUser(req, res);

        expect(res.send).toHaveBeenCalled();
      });
    });
  });
});
