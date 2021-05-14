import { boolean, number, string, array } from '../../../src/configurations/env/helper';

describe('helper-env-tests', () => {
    test('boolean', () => {
        expect(boolean('true')).toBeTruthy();
        expect(boolean('TRUE')).toBeTruthy();
        expect(boolean('  true   ')).toBeTruthy();
        expect(boolean('false')).toBeFalsy();
        expect(boolean('')).toBeFalsy();
        expect(boolean(undefined)).toBeFalsy();
    });

    test('number', () => {
        expect(number('1')).toBe(1);
        expect(number('0')).toBe(0);
        expect(number('')).toBe(0);
        expect(number('foobar')).toBe(0);
        expect(number(undefined)).toBe(0);
    });

    test('string', () => {
        expect(string('foo')).toBe('foo');
        expect(string('   bar   ')).toBe('bar');
        expect(string('')).toBe('');
        expect(string(undefined)).toBe('');
    });

    test('array', () => {
        expect(array('foo, bar, baz')).toStrictEqual(['foo', 'bar', 'baz']);
        expect(array('foo,   bar,baz')).toStrictEqual(['foo', 'bar', 'baz']);
        expect(array(',,')).toStrictEqual([]);
        expect(array('')).toStrictEqual([]);
        expect(array(undefined)).toStrictEqual([]);
    });
});
