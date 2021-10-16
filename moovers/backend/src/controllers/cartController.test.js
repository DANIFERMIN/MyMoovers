const cartController = require('./cartController');
const Cart = require('../models/cartModel');

jest.mock('../models/cartModel');

describe('CartController', () => {
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
      describe('And Cart.create resolves', () => {
        test('Then res.json is called', async () => {
          Cart.create.mockResolvedValue({});

          await cartController.createOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Cart.create rejects', () => {
        test('Then res.status with 500', async () => {
          Cart.create.mockRejectedValue({});

          await cartController.createOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with CREATE_ERROR', async () => {
          Cart.create.mockRejectedValue(new Error('CREATE_ERROR'));

          await cartController.createOne(req, res);

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
      describe('And Cart.find resolves', () => {
        test('Then res.json is called', async () => {
          Cart.find.mockResolvedValue({ name: 'pepe' });

          await cartController.getAll(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Cart.find rejects', () => {
        test('Then res.status with 500', async () => {
          Cart.find.mockRejectedValue();

          await cartController.getAll(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FIND_ERROR', async () => {
          Cart.find.mockRejectedValue(new Error('FIND_ERROR'));

          await cartController.getAll(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('FIND_ERROR');
        });
      });
    });
  });

  describe('Given getOne', () => {
    beforeEach(() => {
      req = {
        params: { cartId: 'i71283716283761827361827' }
      };
    });

    describe('When is invoked', () => {
      describe('And Cart.findById resolves', () => {
        test('Then res.json is called', async () => {
          Cart.findById.mockReturnValue({
            populate: jest.fn().mockReturnValue({
              populate: jest.fn().mockResolvedValue({})
            })
          });

          await cartController.getOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Cart.getOneById rejects', () => {
        test('Then res.status with 500', async () => {
          Cart.findById.mockReturnValue({
            populate: jest.fn().mockReturnValue({
              populate: jest.fn().mockRejectedValue({})
            })
          });

          await cartController.getOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with FINDBYID_ERROR', async () => {
          Cart.findById.mockReturnValue({
            populate: jest.fn().mockReturnValue({
              populate: jest.fn().mockRejectedValue(new Error('FINDBYID_ERROR'))
            })
          });
          await cartController.getOne(req, res);

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
      describe('And Cart.findByIdAndUpdate resolves', () => {
        test('Then res.json is called', async () => {
          Cart.findByIdAndUpdate.mockResolvedValue({ name: 'pepe' });

          await cartController.updateOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Cart.findByIdAndUpdate rejects', () => {
        test('Then res.status with 500', async () => {
          Cart.findByIdAndUpdate.mockRejectedValue();

          await cartController.updateOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndUpdate_ERROR', async () => {
          Cart.findByIdAndUpdate.mockRejectedValue(new Error('findByIdAndUpdate_ERROR'));

          await cartController.updateOne(req, res);

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
      describe('And Cart.findByIdAndDelete resolves', () => {
        test('Then res.status with 204', async () => {
          Cart.findByIdAndDelete.mockResolvedValue();

          await cartController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(201);
        });

        test('Then res.json is called', async () => {
          Cart.findByIdAndDelete.mockResolvedValue();

          await cartController.deleteOne(req, res);

          expect(res.json).toHaveBeenCalled();
        });
      });

      describe('And Cart.findByIdAndDelete rejects', () => {
        test('Then res.status with 500', async () => {
          Cart.findByIdAndDelete.mockRejectedValue();

          await cartController.deleteOne(req, res);

          expect(res.status).toHaveBeenCalledWith(500);
        });

        test('Then res.send is called with findByIdAndDelete_ERROR', async () => {
          Cart.findByIdAndDelete.mockRejectedValue(new Error('findByIdAndDelete_ERROR'));

          await cartController.deleteOne(req, res);

          expect(res.send.mock.calls[0][0].message).toBe('findByIdAndDelete_ERROR');
        });
      });
    });
  });
});
