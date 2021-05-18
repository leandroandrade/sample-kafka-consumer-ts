import env from '../../src/env';

describe('env-tests', () => {
    test('should return environments variables', () => {
        expect(env).not.toBeNull();
        expect(env).not.toBeUndefined();
        expect(typeof env).toBe('object');
    });
});
