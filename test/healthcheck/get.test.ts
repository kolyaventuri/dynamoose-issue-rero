import test from 'ava';
import proxyquire from 'proxyquire';
import {stub} from 'sinon';

const {handler} = proxyquire('../../src/healthcheck/get', {
  '../utils/run-warm': stub().returnsArg(0)
});

test('returns a 200 ok response', async t => {
  const result = await handler({});

  t.deepEqual(result, {
    statusCode: 200,
    body: 'page ok'
  });
});
