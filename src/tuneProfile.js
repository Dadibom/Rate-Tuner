import rateProfiles from './rateProfiles';

function sampleProfile (formula, params, sampleCount = 5) {
  const samples = [];
  for (let i = 0; i < sampleCount; ++i) {
    const stick = i / (sampleCount - 1);
    const degs = formula(stick, params);
    samples.push(degs);
  }
  return samples;
}

function weighError (e) {
  return Math.pow(e/15,4);
}

function getError (s1, s2) {
  let e = 0;
  for (let i = 0; i < s1.length; ++i) {
    e += weighError(Math.abs(s1[i] - s2[i]));
  }
  return e;
}
export default function tuneProfile (newProfile, referenceProfile, referenceParameters) {
  console.log('Tuning started...');
  const sampleCount = 12;
  // const maxError = 5 * sampleCount;
  let D = 1;

  let params = JSON.parse(JSON.stringify(rateProfiles[newProfile].parameters));

  const refSamples = sampleProfile(rateProfiles[referenceProfile].formula, referenceParameters, sampleCount);

  let samplesWithoutChange = 0;

  let currentError = getError(sampleProfile(rateProfiles[newProfile].formula, params, sampleCount), refSamples);

  for (let i = 0; i < 1000000; ++i) {
    const newParams = {};

    for (const k in params) {
      newParams[k] = params[k] + (Math.random() - Math.random()) * D;
    }

    const newS = sampleProfile(rateProfiles[newProfile].formula, newParams, sampleCount);
    const newE = getError(newS, refSamples);

    if (newE < currentError) {
      params = newParams;
      // console.log('Samples without change: ' + samplesWithoutChange);
      // console.log(newE);
      samplesWithoutChange = 0;
      currentError = newE;
    } else {
      ++samplesWithoutChange;
      if (samplesWithoutChange >= 1000) {
        D *= 0.95;
        // console.log('LOWERING D TO', D);
        samplesWithoutChange = 0;
        if (D < 0.001) {
          // console.log('D too low - exiting');
          break;
        }
      }
    }
  }

  return params;
}
