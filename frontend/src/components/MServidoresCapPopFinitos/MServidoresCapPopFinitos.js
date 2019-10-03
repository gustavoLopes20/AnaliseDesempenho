import * as Algorithm  from "../../core/backend";

export default {
  name: 'm-servidores-cap-pop-finitos',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 0,
        MI:0,
        K : 0,
        P0 : 0,
        B: 0,
        M : 0
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
      this.NumMedUsr =  Algorithm.CapacityServersPopulation.ProbabilityNSystemUsers();
    }
  }
}
