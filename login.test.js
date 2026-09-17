const login = require('./login');

test('login succeeds with correct username and password', () => {
    expect(login('admin', '123')).toBe(true);
});

test('login fails with incorrect password', () => {
    expect(login('admin', 'wrong')).toBe(false);
});

test('login fails with incorrect username', () => {
    expect(login('user', '123')).toBe(false);
});
