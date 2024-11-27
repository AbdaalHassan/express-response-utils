const { notFound, created, badRequest, serverError, ok } = require('../src/responses.js');

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

test('badRequest should return a 400 status with message', () => {
    badRequest(res, 'Invalid input');
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({ message: 'Invalid input' });
});

test('serverError should return a 500 status with message', () => {
    serverError(res, 'Something went wrong');
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ message: 'Something went wrong' });
});

test('ok should return a 200 status with message', () => {
    ok(res, 'Request successful');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'Request successful' });
});

test('ok should return a 200 status with data', () => {
    ok(res, { id: 1, name: 'User' });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ data: { id: 1, name: 'User' } });
});
