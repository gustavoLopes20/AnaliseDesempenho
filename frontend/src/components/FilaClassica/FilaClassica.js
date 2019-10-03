import * as Algorithm  from "../../core/backend";

export default {
  name: 'fila-classica',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 600,
        MI:4800,
        Usr: 5
      },
      result : { 
        lambda: 0, mi: 0, 
        intensidade: 0, 
        probUsrZero: 0, 
        probUsrN: 0, 
        probNMais:0, 
        tempoMedResp: 0,
        numMedUsr: 0,
        numMedReq:0
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
      this.result.lambda = Algorithm.ClassicSystem.ArrivalsFee(this.model.Lambda);
      this.result.mi = Algorithm.ClassicSystem.ServiceCharge(this.model.MI);
      this.result.intensidade = Algorithm.ClassicSystem.TrafficIntensity();
      this.result.probUsrZero = Algorithm.ClassicSystem.EmptySystemProbability();
      this.result.probUsrN = Algorithm.ClassicSystem.ProbabilityUsingSystem(this.model.Usr);
      this.result.probNMais = Algorithm.ClassicSystem.EqualUpperProbability();
      this.result.tempoMedResp = Algorithm.ClassicSystem.AverageResponseTime();
      this.result.numMedUsr = Algorithm.ClassicSystem.AverageNumberUsers();
      this.result.numMedReq = Algorithm.ClassicSystem.AverageSystemRequests();
      
      //this.model = {};
      //console.log(this.result);
    }
  }
}
