<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <label class="form-label">Profile</label>
        <select v-model="profile" class="form-select" >
          <option v-for="key in profileKeys" :key="key" :value="key">{{ rateProfiles[key].name }}</option>
        </select>

        <ParameterEditor :profile="profile" v-model="parameters" />

        <label class="form-label">Reference profile</label>
        <select v-model="referenceProfile" class="form-select" >
          <option v-for="key in profileKeys" :key="key" :value="key">{{ rateProfiles[key].name }}</option>
        </select>

        <ParameterEditor :profile="referenceProfile" v-model="referenceParameters" />
      </div>
      <div class="col-6">
        <RateGraph :chartData="rateGraphData" />
      </div>
      <a class="btn btn-primary" @click="tune">Replicate this</a>
    </div>
  </div>
</template>

<script>
import rateProfiles from './rateProfiles';
import ParameterEditor from './components/ParameterEditor';
import RateGraph from './components/RateGraph';
import tuneProfile from './tuneProfile';

function getSamplePoints (sampleCount = 5) {
  const samplePoints = [];
  for (let i = 0; i < sampleCount; ++i) {
    const stick = i / (sampleCount - 1);
    samplePoints.push(stick);
  }
  return samplePoints;
}

function sampleProfile (formula, params, sampleCount = 5) {
  const samplePoints = getSamplePoints(sampleCount);
  const samples = [];
  for (const stick of samplePoints) {
    const degs = formula(stick, params);
    samples.push(degs);
  }
  return samples;
}


export default {
  components: {
    ParameterEditor,
    RateGraph,
  },
  name: 'App',
  data () {
    return {
      rateProfiles,

      profile: 'betaflight',
      referenceProfile: 'actual',

      parameters: {},
      referenceParameters: {},
    };
  },
  beforeMount () {
    this.initializeParameters();
    this.initializeReferenceParameters();
  },
  methods: {
    tune () {
      this.parameters = tuneProfile(this.profile, this.referenceProfile, this.referenceParameters);
    },
    initializeParameters () {
      this.parameters = JSON.parse(JSON.stringify(rateProfiles[this.profile].parameters));
    },
    initializeReferenceParameters () {
      this.referenceParameters = JSON.parse(JSON.stringify(rateProfiles[this.referenceProfile].parameters));
    },
  },
  computed: {
    profileKeys () {
      return Object.keys(this.rateProfiles);
    },
    rateGraphData () {
      return {
          labels: this.rateGraphLabels,
          datasets: [
          {
            label: rateProfiles[this.profile].name,
            borderColor: '#ff0000',
            data: sampleProfile(rateProfiles[this.profile].formula, this.parameters, 21),
            fill: false,
          },
          {
            label: rateProfiles[this.referenceProfile].name,
            borderColor: '#00ff00',
            data: sampleProfile(rateProfiles[this.referenceProfile].formula, this.referenceParameters, 21),
            fill: false,
          },
        ]
      };
    },
    rateGraphLabels () {
      return getSamplePoints(21);
    },
  },
  watch: {
    profile () {
      this.initializeParameters();
    },
    referenceProfile () {
      this.initializeReferenceParameters();
    },
  },
}
</script>

<style>

</style>
