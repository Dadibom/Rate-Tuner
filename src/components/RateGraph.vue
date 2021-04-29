<script>
import { defineComponent } from 'vue'
import { Line } from 'vue3-chart-v2'

export default defineComponent({
  name: 'RateGraph',
  props: ['chartData'],
  extends: Line,
  mounted () {
    console.log(this.chartData)
    this.renderChart(this.chartData, {
      line: {
        fill: false,
      },
      animation: false,
    });
  },
})
</script>
