import * as Algorithm  from "../../core/backend";

export default {
  name: 'm-serv-capacidade-finita',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 10,
        M : 10,
        MI:12,
        P0: 2
      },
      result : { 
        NumMedUsr: 0,
      }
    }
  },
  computed: {

  },
  mounted () {
    this.calcular();
  },
  methods: {
    calcular(){
      this.NumMedUsr =  Algorithm.MMInfiniteServes.MediaUsersSystem(this.model.P0, this.model.Lambda, this.model.MI, this.M);
    }
  }
}
