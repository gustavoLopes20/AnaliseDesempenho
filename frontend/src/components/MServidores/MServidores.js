import * as Algorithm  from "../../core/backend";

export default {
  name: 'm-servidores',
  components: {},
  props: [],
  data () {
    return {
      model: {
        Lambda : 10,
        MI:12,
        MServs: 2
      },
      result : { 
        TempResp: 0,
        Pmso: 0, 
        TempMedResp: 0, 
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
      Algorithm.MServers.CalcP(Number(this.model.Lambda),Number(this.model.MServs), Number(this.model.MI));
      this.result.TempResp = Algorithm.MServers.NoRequest();
      this.result.Pmso = Algorithm.MServers.BusyServers();
      this.result.TempMedResp = Algorithm.MServers.AverageResponseTime();
    }
  }
}
