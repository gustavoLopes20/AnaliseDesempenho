import * as Algorithm  from "../../core/backend";
export default {
  name: 'populacao-finita-um-serv',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda :0,
        M : 0,
        MI: 1,
        K: 0
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
      //this.result = Algorithm.FinitePopulationServer.MediaRequests(this.model.M, this.Model, lambda, mi, k);
    }
  }
}
