const tripController = require('./tripController');
const Trip = require('../models/tripModel');
const User = require('../models/userModel');

jest.mock('../models/tripModel');
jest.mock('../models/userModel');

describe('TripController', () => {
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
      describe('And Trip.create resolves', () => {
        test('Then res.json is called', async () => {
          Trip.create.mockResolvedValue({ name: 'pepe' });
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await tripController.createOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Trip.create rejects', () => {
        test('Then res.status with 500', async () => {
          Trip.create.mockRejectedValue({ name: 'pepe' });
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await tripController.createOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          Trip.create.mockRejectedValue(new Error('CREATE_ERROR'));
          User.findById.mockReturnValue({
            trips: [],
            save: jest.fn()
          });
          await tripController.createOne(req, res);

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
      describe('And User.find resolves', () => {
        test('Then res.json is called', async () => {
          Trip.find.mockResolvedValue({ name: 'pepe' });

          await tripController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.find rejects', () => {
        test('Then res.status with 500', async () => {
          Trip.find.mockRejectedValue();

          await tripController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          Trip.find.mockRejectedValue(new Error('FIND_ERROR'));

          await tripController.getAll(req, res);

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
      describe('And Trip.findById resolves', () => {
        test('Then res.json is called', async () => {
          Trip.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockReturnValue({
                    populate: jest.fn()
                      .mockReturnValue({
                        populate: jest.fn()
                          .mockResolvedValue({

                          })
                      })
                  })
              })
            });

          await tripController.getOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.getOneById rejects', () => {
        test('Then res.status with 500', async () => {
          Trip.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockReturnValue({
                    populate: jest.fn()
                      .mockReturnValue({
                        populate: jest.fn()
                          .mockRejectedValue({

                          })
                      })
                  })
              })
            });

          await tripController.getOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          Trip.findById
            .mockReturnValue({
              populate: jest.fn().mockReturnValue({
                populate: jest.fn()
                  .mockReturnValue({
                    populate: jest.fn()
                      .mockReturnValue({
                        populate: jest.fn()
                          .mockRejectedValue(new Error('FINDBYID_ERROR'))
                      })
                  })
              })
            });

          await tripController.getOne(req, res);

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
      describe('And User.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Trip.findByIdAndUpdate.mockResolvedValue({ name: 'pepe' });

          await tripController.updateOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          Trip.findByIdAndUpdate.mockRejectedValue();

          await tripController.updateOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          Trip.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await tripController.updateOne(req, res);

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
      describe('And User.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
          Trip.findByIdAndDelete.mockResolvedValue();

          await tripController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(201);
        });

        test('Then res.json is called', async () => {
          Trip.findByIdAndDelete.mockResolvedValue();

          await tripController.deleteOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And User.findByIdAndDelete rejects', () => {
        test('Then res.status with 500', async () => {
          Trip.findByIdAndDelete.mockRejectedValue();

          await tripController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          Trip.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

          await tripController.deleteOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
