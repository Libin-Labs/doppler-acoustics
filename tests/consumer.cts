import { observedFrequency } from '@lp-labs/doppler-acoustics';
if (Math.abs(observedFrequency(100, 300, 0, 100) - 150) > 1e-12) throw new Error('Doppler');
// @ts-expect-error invalid argument must be rejected by declarations
observedFrequency('100', 300);
