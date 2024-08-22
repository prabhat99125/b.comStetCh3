let btn = document.querySelector("#btn");
let namunaNo = document.querySelector("#namunaNo");
let table = document.querySelector("#table");
let getData = document.querySelector("#getData");
let namNo = namunaNo.value;
let cretbtn = document.querySelector("#creatTable");
let iptChart = document.getElementsByClassName("iptChart");
let dision = document.getElementsByClassName("dicision");
let calculet = document.querySelector("#calculet");
let npChartControl = document.querySelector("#npChartControl");
let footer = document.querySelector(".footer");


btn.addEventListener("click",() => {
    
    let HTMLTable = `<table>`;
    HTMLTable +=`<tr><thead><th>નિદર્શ</th>`;
    for ( a=1; a<=namunaNo.value; a++) {
        HTMLTable += `<th>${a}</th>`;
    }
    HTMLTable += `</thead><tbody></tr><tr><td>ખામીવાળી વસ્તુઓ</td>`;
    for ( a=1; a<=namunaNo.value; a++) {
        no.push(a);
        HTMLTable += `<td><input  type="number" class="iptChart"></input></td>`;
    }
    HTMLTable +=`</tr><tbody></table>`;
    
    table.innerHTML = HTMLTable;
    cretbtn.style.display = "none";
    getData.style.display = "block";
});


let no = [];
let dicision = [];
let iptArray = [];
let sumiptArray = 0;
let addtable = document.querySelector("#addtable")
getData.addEventListener("click",() => {

    footer.style.position = "relative";

    for (a=0; a<namunaNo.value; a++) {
        iptArray.push(Number(iptChart[a].value));
    }
    
    let npTable = `<table><thead><tr><th>નિદર્શ</th><th>ખામીવાળી વસ્તુઓ</th></tr></thead><tbody>`;
    for ( a=0; a<namunaNo.value; a++) {
        npTable += `<tr><td>${no[a]}</td><td>${iptArray[a]}</td></tr>`;
    }
  
    for (a of iptArray) {
        sumiptArray += a;
    }
    
    npTable += `<tr><td><b>Total</b></td><td><b>${sumiptArray}</b></td></tr></tbody></table>`;
    addtable.innerHTML = npTable;

    // calculet
    let cBar = sumiptArray / namunaNo.value;
    let centerLine = cBar;
    let upperControlLimit = cBar + 3 * (Math.sqrt(cBar));
    let lcl = cBar - 3 * (Math.sqrt(cBar));
    let lowerControlLimit ; 
        if( lcl<0 ) {
            lowerControlLimit = 0;
        }
        else {
            lowerControlLimit = lcl;
        }

    let showChrt = document.querySelector(".showChrt");
    showChrt.style.display = "block"
    let calData = `<table><tr><td><math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> C </mi> </mrow> <mrow> <mo> - </mo> </mrow> </mover> <mo> = </mo> <mfrac> <mrow> <mo> &#x2211; <!-- n-ary summation --> </mo> <mi> C </mi> </mrow> <mrow> <mi> m </mi> </mrow> </mfrac> <mo> = </mo> <mfrac> <mrow> <mn> ${sumiptArray} </mn> </mrow> <mrow> <mn> ${cBar} </mn> </mrow> </mfrac> <mo> = </mo> <mn> ${sumiptArray / namunaNo.value} </mn> </math></td></tr></table>`;
    
    calculet.innerHTML = calData;

    let npChart = `<p id="chName">C નકશાની નિયંત્રણ સીમાઓ</p>`;
    npChart += `<table><tr><td>C.L = <math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> C </mi> </mrow> <mrow> <mo> _ </mo> </mrow> </mover> <mo> = </mo> <mn><b> ${cBar} </b></mn> </math></td></tr></table>`
    npChart += `<table><tr><td>U.C.L. = <math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> C </mi> </mrow> <mrow> <mo> _ </mo> </mrow> </mover> <mo> + </mo> <mn> 3 </mn> <msqrt> <mi> C </mi> </msqrt> </math>
                <tr><td>U.C.L. = <math xmlns='http://www.w3.org/1998/Math/MathML'> <mn> ${cBar} </mn><mo> + </mo> <mn> 3 </mn> <msqrt> <mi> ${cBar} </mi> </msqrt> </math>
                <tr><td>U.C.L. = ${cBar} + 3 (${Math.sqrt(cBar)}) </td></tr>
                <tr><td>U.C.L. = ${cBar} + ${ 3 * Math.sqrt(cBar)} </td></tr>
                <tr><td>U.C.L. = <b>${upperControlLimit}</b></td></tr></table>`;


    npChart += `<table><tr><td>L.C.L = <math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> C </mi> </mrow> <mrow> <mo> _ </mo> </mrow> </mover> <mo> - </mo> <mn> 3 </mn> <msqrt> <mover> <mrow> <mi> C </mi> </mrow> <mrow> <mo> _ </mo> </mrow> </mover> </msqrt> </math>
                <tr><td>L.C.L = ${cBar} - 3 <math xmlns='http://www.w3.org/1998/Math/MathML'> <msqrt> <mn> ${cBar} </mn> </msqrt> </math></td></tr>
                <tr><td>L.C.L = ${cBar} -  3 (${Math.sqrt(cBar)}) </td></tr>
                <tr><td>L.C.L = ${cBar} - ${ 3 * Math.sqrt(cBar)} </td></tr>
                <tr><td>L.C.L = <b> ${lowerControlLimit} <b> </td></tr></table>`;
                   
    npChartControl.innerHTML = npChart;

    // chart creat
    let x = no;
    let y =  iptArray;
   
    
    let data1 = {
        labels: x,
        datasets: [{
                    label: 'C Chart',
                    data: y,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2,
                    pointRadius: 1.5,
                    fill: false,
                },  {
                    label: 'U.C.L.',
                    data: Array(x.length).fill(upperControlLimit),
                    borderColor: 'green',
                    borderWidth: 1.9,
                    borderDash: [10, 3],
                    fill: false,
                    pointRadius: 0
                },
                {
                    label: 'C.L.',
                    data: Array(x.length).fill(centerLine),
                    borderColor: 'black',
                    borderWidth: 1.9,
                    borderDash: [0, 0],
                    fill: false,
                    pointRadius: 0,
                    
                },
                 {
                    label: 'L.C.L.',
                    data: Array(x.length).fill(lowerControlLimit),
                    borderColor: 'red',
                    borderWidth: 1.9,
                    borderDash: [10, 3],
                    fill: false,
                    pointRadius: 0
                }]
            };
            
            // Configuration options
            let options = {
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Sample Number'
                        }
                    }],
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                },
                animation: {
                    easing: 'linear'
                }
            };
    
            // Create Chart 1 on the canvas element
            let ctx1 = document.getElementById('chart1').getContext('2d');
            let chart1 = new Chart(ctx1, {
                type: 'line',
                data: data1,
                options: options
            });

            //show the disizan
            let ulcl = [];
            for (let i = 0; i < iptArray.length; i++) {
                if (iptArray[i] > upperControlLimit) {
                    ulcl.push(i+1);
                }
                if (iptArray[i] < lowerControlLimit) {
                    ulcl.push(i+1);
                }
            } 

            let ans = document.querySelector("#ans");
            if ( ulcl.length === 0 ) {
                ans.innerHTML = `<p><samp></samp> <b>નિર્ણય : </b> ઉપરના નકશામાં બધાં જ બિંદુઓ બન્ને નિયંત્રણ સીમાઓની વચ્ચે પડે છે. તેથી <b>ઉત્પાદનપ્રક્રિયા નિયંત્રણમાં છે.</b></P>`;
            }
            else {
                ans.innerHTML = `<p><samp></samp><b>નિર્ણયો :</b> ઉપરનો C નકશો જોતાં નિદર્શ નંબર <b>${ulcl}</b> નાં બિંદુઓ નિયંત્રણ સીમાની બહાર પડે છે. તેથી ,<b>ઉત્પાદન પ્રક્રિયા નિયંત્રણમાં નથી.</b></p>`
            }
});