<!-- This is the desktop version of the Bar Chart -->
<script>
import { Bar } from 'vue-chartjs'

export default {
  mixins: [Bar], // Either mixins or extend will work.
  data() {
    return {
      datacollection: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Sales Data',
            backgroundColor: '#575BDE',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: 'white',
            data: [10, 5, 20, 25, 18, 50, 65, 40, 35, 45, 55, 40],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
                maxTicksLimit: 5,
              },
              gridLines: {
                display: true,
                drawBorder: false,
                color: '#ECECEE',
                zeroLineColor: '#ECECEE',
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#110F2466', // for color 110F24, 40%(muted)
              },
              gridLines: {
                display: false,
                color: '#ECECEE',
                zeroLineColor: '#ECECEE',
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: (tooltipItems, data) => '$' + tooltipItems.yLabel,
          },
        },
        layout: {
          padding: {
            left: 10,
            right: 5,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    // this.chartData is created in the mixin
    this.renderChart(this.datacollection, this.options)
  },
}
</script>

<style></style>
