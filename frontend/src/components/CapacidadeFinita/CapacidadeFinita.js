import * as Algorithm  from "../../core/backend";

export default {
  name: 'capacidade-finita',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 5,
        M : 1,
        MI: 10,
        B: 6
      },
      result : 0
    }
  },
  computed: {

  },
  mounted () {
    this.calcular();
  },
  methods: {
    calcular(){
      //this.result = Algorithm.MServersFiniteCapacity.NoRequest(this.model.M, (this.model.Lambda/this.model.MI), this.model.B, this.model.MI, this.model.Lambda);
    }
  }
}
