const itemController = require('./itemController');
const Item = require('../models/itemModel');

jest.mock('../models/itemModel');

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
      describe('And Item.create resolves', () => {
        test('Then res.json is called', async () => {
          Item.create.mockResolvedValue({ name: 'pepe' });

          await itemController.createOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Item.create rejects', () => {
        test('Then res.status with 500', async () => {
          Item.create.mockRejectedValue({ name: 'pepe' });

          await itemController.createOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          Item.create.mockRejectedValue(new Error('CREATE_ERROR'));

          await itemController.createOne(req, res);

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
      describe('And Item.find resolves', () => {
        test('Then res.json is called', async () => {
          Item.find.mockResolvedValue({ name: 'pepe' });

          await itemController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Item.find rejects', () => {
        test('Then res.status with 500', async () => {
          Item.find.mockRejectedValue();

          await itemController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          Item.find.mockRejectedValue(new Error('FIND_ERROR'));

          await itemController.getAll(req, res);

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
      describe('And Item.findById resolves', () => {
        test('Then res.json is called', async () => {
          Item.findById.mockResolvedValue({});

          await itemController.getOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Item.getOneById rejects', () => {
        test('Then res.status with 500', async () => {
          Item.findById.mockRejectedValue({});

          await itemController.getOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          Item.findById.mockRejectedValue(new Error('FINDBYID_ERROR'));

          await itemController.getOne(req, res);

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
      describe('And Item.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Item.findByIdAndUpdate.mockResolvedValue({ name: 'pepe' });

          await itemController.updateOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Item.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          Item.findByIdAndUpdate.mockRejectedValue();

          await itemController.updateOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          Item.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await itemController.updateOne(req, res);

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
      describe('And Item.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
          Item.findByIdAndDelete.mockResolvedValue();

          await itemController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(201);
        });

        test('Then res.json is called', async () => {
          Item.findByIdAndDelete.mockResolvedValue();

          await itemController.deleteOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Item.findByIdAndDelete rejects', () => {
        test('Then res.status with 500', async () => {
          Item.findByIdAndDelete.mockRejectedValue();

          await itemController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          Item.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

          await itemController.deleteOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
