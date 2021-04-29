<template>
  <div>
    <div v-for="key in parameterKeys" :key="key" class="mb-3">
      <label :for="id+profile+key">{{ key }}</label>
      <input type="number" :id="id+profile+key" v-model="params[key]"/>
    </div>
  </div>
</template>


<script>
import rateProfiles from '../rateProfiles';

let id = 0;

export default {
  props: ['modelValue', 'profile'],
  data () {
    return {
      rateProfiles,
      id: ++id,
      params: {},
    };
  },
  mounted () {
    this.setDefaultParams();
  },
  methods: {
    setDefaultParams () {
      const srcParams = this.rateProfiles[this.profile].parameters;

      this.params = {};
      for (const p in srcParams) {
        this.params[p] = srcParams[p];
      }
    },
  },
  computed: {
    parameterKeys () {
      return Object.keys(this.rateProfiles[this.profile].parameters);
    },
  },
  watch: {
    profile () {
      this.setDefaultParams();
    },
    modelValue: {
      handler () {
        for (const k in this.modelValue) {
          if (this.params[k] !== this.modelValue[k])
          this.params[k] = this.modelValue[k];
        }
      },
    },
    params: {
      deep: true,
      handler (newParams) {
        this.$emit('update:modelValue', newParams);
      },
    }
  },
}
</script>
