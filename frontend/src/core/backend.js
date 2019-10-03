'use strict';

//DIvisão
function division(a, b) {
    return a / b
}

//Multiplicação
function multiplication(a, b) {
    return a * b
}

//Subtração
function subctration(a, b) {
    return a - b
}

//Soma
function sum(a, b) {
    return a + b
}

//Potência
function pow(a, b) {
    return Math.pow(a, b)
}

//Fatorial
function factorial(n) {
    let respFat

    if (n <= 1)
        return (1)
    else {
        respFat = n * factorial(n - 1)
        return respFat
    }
}

//Somatória
class Summation {

    static summationMServers(init, final, m, p, callback, resp) {

        if (init != final && init < final) {
            resp += callback(m, init, p)
            return this.summationMServers(init + 1, final, m, p, callback, resp)
        } else {
            return resp += callback(m, init, p)
        }
    }

    static summationMServersFinitePopulation(init, final, m, p, lambda, mi, k, callback, resp) {

        if (init != final && init < final) {
            resp += callback(m, init, p, lambda, mi, k)
            return this.summationMServers(init + 1, final, m, p, lambda, mi, k, callback, resp)
        } else {
            return resp += callback(m, init, p, lambda, mi, k)
        }
    }
}


/****=========== CLASSES =============****/

//Sistema clássico
export class ClassicSystem {

    lambda = 0;
    mi = 0;
    p = 0;
    p0 = 0;
    n = 0;

    //Taxa de chegada
    static ArrivalsFee(a) {
        this.lambda = division(Number(a), 60);
        return this.lambda;
    }

    //Taxa de serviço
    static ServiceCharge(a) {
        this.mi = division(Number(a), 60);
        return this.mi;
    }

    //Intensidade de tráfego
    static TrafficIntensity() {
        this.p =  division(this.lambda, this.mi)
        return (this.p * 100)
    }

    //Probabilidade do sistema está vazio
    static EmptySystemProbability() {
        this.p0 = multiplication(subctration(1, this.p), 100)
        return this.p0
    }

    //Probabilidade de n pessoas estar usando o sistema
    static ProbabilityUsingSystem(n) {
        this.n = Number(n);
        return multiplication(multiplication(pow(this.p, this.n), this.p0),100)
    }

    //Probabilidade de n ou mais pessoas estar usando o sistema
    static EqualUpperProbability() {
        return multiplication(pow(this.p, this.n), 100)
    }

    //Tempo médio de resposta
    static AverageResponseTime() {
        return division(1, multiplication(this.mi, subctration(1, this.p)))
    }

    //Número médio de usuários
    static AverageNumberUsers() {
        return (division(this.p, (1 - this.p)) * 100).toFixed(0);
    }

    //Solicitações médias no sistema
    static AverageSystemRequests() {
        return division(pow(this.p, 2), subctration(1, this.p))
    }
}

export class MServers extends Summation {
    p = 0;
    m = 0;
    p0 = 0;

    static CalcP(lambda,m,mi){
        this.p = division(lambda,multiplication(m,mi))
        this.m = m;
    }
    //Probabilidade do servidor não ter requisições
    static NoRequest() {

        let respSummation = super.summationMServers(0, this.m - 1, this.m, this.p, (m, n, p) => {
            return division(pow(multiplication(m, p), n), factorial(n))
        }, 0)

        this.p0 = division(1, sum(division(pow(multiplication(this.m, this.p), this.m), multiplication(factorial(this.m), subctration(1, this.p))), respSummation))
        return this.p0;
    }

    //Probabilidade dos servidores estarem ocupados
    static BusyServers() {
        return multiplication(this.NoRequest(this.m, this.p), division(pow(multiplication(this.m, this.p), this.m), multiplication(factorial(this.m), subctration(1, this.p))))
    }

    //Tempo medio de resposta
    static AverageResponseTime() {
        return multiplication(multiplication(division(1, this.m), division(this.BusyServers(), multiplication(this.m, subctration(1, this.p)))), 100)
    }
}

export class MMInfiniteServes {
    //Media de usuários no sistema
    static MediaUsersSystem(p0, lambda, mi, n) {
        p0 = Number(p0)
        lambda = Number(lambda)
        mi = Number(mi)
        n = Number(n)

        let p = division(lambda, mi)
        
        return multiplication(division(pow(p, n), factorial(n)), p0)
    }

}

export class FiniteCapacity {
    static LossRate(lambda, mi, b) {
        let p = division(lambda, mi)
        let fullSystem = multiplication(division(subctration(1, p), subctration(1, pow(p, b + 1))), pow(p, b))

        return lambda * fullSystem
    }
}

export class MServersFiniteCapacity {
    //Probabilidade do servidor não ter requisições
    static NoRequest(m, p, b, mi, lambda) {

        let respSummation = super.summationMServers(0, m - 1, m, p, (m, n, p) => {
            return division(pow(multiplication(m, p), n), factorial(n))
        }, 0)

        let p0 = division(1, sum(division(pow(multiplication(m, p), b - m + 1), multiplication(factorial(m), subctration(1, p))), respSummation))
        let pb = multiplication(multiplication(division(pow(m, m), factorial(m)), pow(division(lambda, m), b)), p0)

        return lambda * pb

    }
}

export class FinitePopulationServer {
    // Número médio de requisições na fila
    static MediaRequests(m, n, p, lambda, mi, k) {
        let respSummation = super.summationMServersFinitePopulation(0, m, m, p, lambda, mi, k, (m, n, p, lambda, mi, k) => {
            return multiplication(pow(division(lambda, mi), n), division(factorial(k), factorial(subctration(k, n))))
        }, 0)

        return subctration(k, multiplication(division(subctration(lambda, mi), lambda), subctration(1 - respSummation)))
    }
}

export class FinitePopulationEndlessServers {
    // Número médio de clientes no sistema de banco dedados
    static AverageNumberBank(k, lambda, mi) {
        k = Number(k)
        lambda = Number(lambda)
        mi = Number(mi)
        return division(multiplication(k, division(lambda, mi)), sum(1, division(lambda, mi)))
    }
}

export class CapacityServersPopulation {
    //Propabilidade de N usuários estarem no sistema
    static ProbabilityNSystemUsers(lambda, mi, m, n, b, k, p0) {
        return multiplication(multiplication(pow(division(lambda, mi), n), multiplication(division(k, n), p0)), 100)
    }
}
