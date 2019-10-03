import * as Algorithm  from "../../core/backend";

export default {
  name: 'infinitos-servidores',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 0,
        M : 0,
        MI: 0,
        P0: 0
      },
      result : { 
        NumMedUsr: 0,
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    calcular(){
      this.NumMedUsr =  Algorithm.MMInfiniteServes.MediaUsersSystem(this.model.P0, this.model.Lambda, this.model.MI, this.model.M);
    }
  }
}
