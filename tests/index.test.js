import { strict as assert } from 'assert';

assert.strictEqual('hello', 'hello'); // ок
// strictEqual(actual, expected) проверяет равенство по ссылке,
// то есть два разных объекта, имеющих одинаковое содержание,
// рассматриваются, как не эквивалентные:
assert.strictEqual({}, {});     // ошибка
assert.deepStrictEqual({}, {}); // ок

// deepStrictEqual(params) можно вызывать как deepEqual(params)
assert.deepStrictEqual({ key: 'value' }, { key: 'value' });   // ок
assert.deepEqual({ key: 'value' }, { key: 'value' });         // ок
assert.deepEqual({ key: 'value' }, { key: 'another value' }); // ошибка

assert.notStrictEqual('hello', 'world');         // ок
assert.notDeepStrictEqual({ a: 1 }, { a: '1' }); // ок

console.log('Все тесты пройдены!');
