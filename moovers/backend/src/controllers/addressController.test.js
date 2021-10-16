const addressController = require('./addressController');
const Address = require('../models/addressModel');
const User = require('../models/userModel');

jest.mock('../models/addressModel');
jest.mock('../models/userModel');

describe('AddressController', () => {
  let req;
  let res;

  beforeEach(() => {
    res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
  });

  describe('Given createOne', () => {
    beforeEach(() => {
      req = {
        body: {}
      };
    });
    describe('When is invoked', () => {
      describe('And address.create resolves', () => {
        test('Then res.json is called', async () => {
          Address.create.mockResolvedValue({ name: 'pepe' });
          User.findById.mockReturnValue({
            favorites: [],
            save: jest.fn()
          });
          await addressController.createOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Address.create rejects', () => {
        test('Then res.status with 500', async () => {
          Address.create.mockRejectedValue({ name: 'pepe' });
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await addressController.createOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          Address.create.mockRejectedValue(new Error('CREATE_ERROR'));
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await addressController.createOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('CREATE_ERROR');
        });
      });
    });
  });

  describe('Given getAll', () => {
    beforeEach(() => {
      req = {
        query: {}
      };
    });
    describe('When is invoked', () => {
      describe('And Address.find resolves', () => {
        test('Then res.json is called', async () => {
          Address.find.mockResolvedValue({ name: 'casa' });

          await addressController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Address.find rejects', () => {
        test('Then res.status with 500', async () => {
          Address.find.mockRejectedValue();

          await addressController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          Address.find.mockRejectedValue(new Error('FIND_ERROR'));

          await addressController.getAll(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });

  describe('Given getOne', () => {
    beforeEach(() => {
      req = {
        params: { userId: 'i71283716283761827361827' }
      };
    });

    describe('When is invoked', () => {
      describe('And Address.findById resolves', () => {
        test('Then res.json is called', async () => {
          Address.findById.mockResolvedValue({
          });
          await addressController.getOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Address.getOneById rejects', () => {
        test('Then res.status with 500', async () => {
          Address.findById.mockRejectedValue();

          await addressController.getOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          Address.findById.mockRejectedValue(new Error('FINDBYID_ERROR'));

          await addressController.getOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FINDBYID_ERROR');
        });
      });
    });
  });

  describe('Given updateOne', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: 'lkj12hg3kj1h2gk3j1h2g' }
      };
    });
    describe('When is invoked', () => {
      describe('And Address.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Address.findByIdAndUpdate.mockResolvedValue({ name: 'pepe' });

          await addressController.updateOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Address.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          Address.findByIdAndUpdate.mockRejectedValue();

          await addressController.updateOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          Address.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await addressController.updateOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndUpdate_ERROR');
        });
      });
    });
  });

  describe('Given deleteOne', () => {
    beforeEach(() => {
      req = {
        body: {},
        params: { userId: 'lkj12hg3kj1h2gk3j1h2g' }
      };
    });
    describe('When is invoked', () => {
      describe('And Address.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
          Address.findByIdAndDelete.mockResolvedValue();
          User.findById.mockReturnValue({
            favorites: [],
            save: jest.fn()
          });
          await addressController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(201);
        });

        test('Then res.json is called', async () => {
          Address.findByIdAndDelete.mockResolvedValue();

          await addressController.deleteOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Address.findByIdAndDelete rejects', () => {
        test('Then res.status with 500', async () => {
          Address.findByIdAndDelete.mockRejectedValue();
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await addressController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          Address.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await addressController.deleteOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
