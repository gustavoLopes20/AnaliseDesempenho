import * as Algorithm  from "../../core/backend";

export default {
  name: 'populacao-finita-inf-serv',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 0,
        MI:0,
        K : 0
      },
      result : 0
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    calcular(){
      this.result = Algorithm.FinitePopulationEndlessServers.AverageNumberBank(this.model.K, this.model.Lambda, this.model.MI);
    }
  }
}
