function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function output(value: number): number {
  if (!Number.isFinite(value)) throw new RangeError('Result overflow');
  return value;
}
export function observedFrequency(
  frequency: number,
  soundSpeed: number,
  observerToward = 0,
  sourceToward = 0,
): number {
  finite(frequency, 0, 1e100);
  finite(soundSpeed, 1e-100, 1e100);
  finite(observerToward);
  finite(sourceToward);
  if (Math.abs(observerToward) >= soundSpeed || Math.abs(sourceToward) >= soundSpeed)
    throw new RangeError('Subsonic velocity required');
  const ratio = (1 + observerToward / soundSpeed) / (1 - sourceToward / soundSpeed),
    result = output(frequency * ratio);
  if (frequency > 0 && result === 0) throw new RangeError('Frequency resolution lost');
  return result;
}
