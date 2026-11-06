import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('stationary', () => {
  assert.equal(api.observedFrequency(440, 340), 440);
});
test('approaching source', () => {
  assert.ok(Math.abs(api.observedFrequency(100, 300, 0, 100) - 150) < 1e-12);
});
test('approaching observer', () => {
  assert.equal(api.observedFrequency(100, 300, 60, 0), 120);
});
test('receding', () => {
  assert.equal(api.observedFrequency(100, 300, 0, -100), 75);
});
test('zero frequency', () => {
  assert.equal(api.observedFrequency(0, 300), 0);
});
test('sonic and invalid', () => {
  assert.throws(() => api.observedFrequency(100, 300, 0, 300));
  assert.throws(() => api.observedFrequency(100, 300, -300));
  assert.throws(() => api.observedFrequency(-1, 300));
  assert.throws(() => api.observedFrequency(1, 0));
});
