
const { notFound, created } = require('../src/responses.js');

const res = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
};

test('notFound should return a 404 status with message', () => {
    notFound(res, 'User');
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'User not found' });
});

test('created should return a 201 status with message and data', () => {
    created(res, 'User created', { id: 1 });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({ message: 'User created', data: { id: 1 } });
});

