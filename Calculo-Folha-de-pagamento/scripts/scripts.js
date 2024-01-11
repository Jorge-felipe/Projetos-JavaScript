 let retorno = document.getElementById("resultado")
 let btn_faz = document.getElementById("btn-faz")

 btn_faz.addEventListener('click', function () {
     let salarioB = document.getElementById("salariobruto").value
     let descontos = document.getElementById("descontos").value
     let dependentes = document.getElementById("n_dependentes").value
     let l_salario = document.getElementById("l_salarioB")
     let l_descontos = document.getElementById("l_descontos")
     let l_inss_p = document.getElementById("l_inss_p")
     let l_inss_vlr = document.getElementById("l_inss_vlr")
     let l_irrf_vlr = document.getElementById("l_irrf_vlr")
     let l_irrf_p = document.getElementById("l_irrf_p")
     let l_totalliquido = document.getElementById("l_total_liq")
     let inss_vlr = 0
     let inss_p = 0
     let irrf_p = 0
     let irrf_vlr = 0

     // INSS 7.5%
     //IRRF 0%
     //Salarios até R$ 1.302
     if (salarioB <= 1302) {
         inss_vlr = (7.5 * salarioB) / 100
         inss_p = (inss_vlr / salarioB) * 100
         let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
         l_salario.innerHTML = `${salarioB}`
         l_descontos.innerHTML = `R$: ${descontos}`
         l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
         l_inss_p.innerHTML = `${inss_p}`
         l_irrf_p.innerHTML = `${irrf_p}`
         l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
         l_totalliquido.innerHTML = `R$: ${salarioLiq}`
     }

     // INSS 9%
     // IRRF 0%
     // Salarios até R$ 1.302 até 1903
     else if (salarioB > 1302 && salarioB < 1903.98) {
         inss_vlr = (9 * salarioB) / 100
         inss_p = (inss_vlr / salarioB) * 100
         let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
         l_salario.innerHTML = `${salarioB}`
         l_descontos.innerHTML = `R$: ${descontos}`
         l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
         l_inss_p.innerHTML = `${inss_p}%`
         l_irrf_p.innerHTML = `0`
         l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
        l_totalliquido.innerHTML = `R$: ${salarioLiq}`
    }
    // INNS 9%
    // IRRF 7.5%
    //SALARIO - de 1.302,01 até 2.571,29
    //IRRF - De R$1.903,99 até R$2.826,65	7,5%
    else if (salarioB > 1903 && salarioB <= 2571.29) {
        inss_vlr = (9 * salarioB) / 100
        inss_p = (inss_vlr / salarioB) * 100
        irrf_vlr = salarioB * (0.075)
        irrf_p = (irrf_vlr / salarioB) * 100
        let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
        l_salario.innerHTML = `${salarioB}`
        l_descontos.innerHTML = `R$: ${descontos}`
        l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
        l_inss_p.innerHTML = `${inss_p}%`
        l_irrf_p.innerHTML = `${irrf_p}%`
        l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
        l_totalliquido.innerHTML = `R$: ${salarioLiq}`
    }
    // // INSS
    // // Salarios até R$ 2571.30 até 2.826.65
    // // IRFF - De R$2.826,66 até R$3.751,05	15%
    else if (salarioB > 2571.30 && salarioB <= 2826.65) {
        inss_vlr = (12 * salarioB) / 100
        inss_p = (inss_vlr / salarioB) * 100
        irrf_vlr = salarioB * (0.075 - 142.8)
        irrf_p = (irrf_vlr / salarioB) * 100
        let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
        l_salario.innerHTML = `${salarioB}`
        l_descontos.innerHTML = `R$: ${descontos}`
        l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
        l_inss_p.innerHTML = `${inss_p}%`
        l_irrf_p.innerHTML = `${irrf_p}%`
        l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
        l_totalliquido.innerHTML = `R$: ${salarioLiq}`
    } //CONTINUA
    else if (salarioB > 2826.65 && salarioB <= 3751.05) {
        inss_vlr = (12 * salarioB) / 100
        inss_p = (inss_vlr / salarioB) * 100
        irrf_vlr = salarioB * (0.15)
        irrf_p = (irrf_vlr / salarioB) * 100
        let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
        l_salario.innerHTML = `${salarioB}`
        l_descontos.innerHTML = `R$: ${descontos}`
        l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
        l_inss_p.innerHTML = `${inss_p}%`
        l_irrf_p.innerHTML = `${irrf_p}%`
        l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
        l_totalliquido.innerHTML = `R$: ${salarioLiq}`
    }
    //Salario 3751.05 between 3856.94
    //IRRF 22.5%
    else if (salarioB > 3751.05 && salarioB <= 3856.94) {
        inss_vlr = (12 * salarioB) / 100
        inss_p = (inss_vlr / salarioB) * 100
        irrf_vlr = salarioB * (0.225)
        irrf_p = (irrf_vlr / salarioB) * 100
        let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
        l_salario.innerHTML = `${salarioB}`
        l_descontos.innerHTML = `R$: ${descontos}`
        l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
        l_inss_p.innerHTML = `${inss_p}%`
        l_irrf_p.innerHTML = `${irrf_p}%`
        l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
        l_totalliquido.innerHTML = `R$: ${salarioLiq}`
    }
    //Inss 14%
    //IRRF 22.5
     else if (salarioB > 3856.95 && salarioB <= 4664.68) {
         inss_vlr = (14 * salarioB) / 100
         inss_p = (inss_vlr / salarioB) * 100
         irrf_vlr = salarioB * (0.225)
         irrf_p = (irrf_vlr / salarioB) * 100
         let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
         l_salario.innerHTML = `${salarioB}`
         l_descontos.innerHTML = `R$: ${descontos}`
         l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
         l_inss_p.innerHTML = `${inss_p}%`
         l_irrf_p.innerHTML = `${irrf_p}%`
         l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
         l_totalliquido.innerHTML = `R$: ${salarioLiq}`
     }
     //INSS 
     //IRRF 
     else if (salarioB > 4664.68) {
         inss_vlr = (14 * salarioB) / 100
         inss_p = (inss_vlr / salarioB) * 100
         irrf_vlr = salarioB * (0.275)
         irrf_p = (irrf_vlr / salarioB) * 100
         let salarioLiq = (salarioB - descontos - inss_vlr - irrf_vlr)
         l_salario.innerHTML = `${salarioB}`
         l_descontos.innerHTML = `R$: ${descontos}`
         l_inss_vlr.innerHTML = `R$: ${inss_vlr}`
         l_inss_p.innerHTML = `${inss_p}%`
         l_irrf_p.innerHTML = `${irrf_p}%`
         l_irrf_vlr.innerHTML = `R$: ${irrf_vlr}`
         l_totalliquido.innerHTML = `R$: ${salarioLiq}`
     }
 });

 let btn_limpar = document.getElementsByClassName("limpeza")[0]
 btn_limpar.addEventListener('click', function () {
     location.reload();
 });