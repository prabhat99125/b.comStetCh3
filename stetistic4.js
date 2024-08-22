let namunaNo = document.querySelector("#namunaNo");
let btn = document.querySelector("#btn");
let send = document.querySelector(".table");
let getData = document.querySelector("#getData")
let xValue = document.querySelectorAll(".X");
let showChart = document.querySelector(".showChrt");

// creat input data table
btn.addEventListener(("click"), () => {
    let btnValue = namunaNo.value;
    let html = `<table class="">`;
    html +=`<tr><thead><th>નિદર્શ</th>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<th>${a}</th>`;
        no.push(a);
    }
    html += `</thead><tbody></tr><tr><td>X̅</td>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<td><input  type="number" class="X"></input></td>`;
    }
    html +=`</tr><tbody><tr><td>R</td>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<td><input type="number" class="R"></input></td>`;
    }  
    
    html += `</tr><tbody>`;
    html += `<table class=""><tr><td>n<input type="number" class="nad"></td> <td>A<sub>2</sub><input type="number" class="nad"></td> <td>D<sub>3</sub><input type="number" value="0" class="nad"></td> <td>D<sub>4</sub><input type="number" class="nad"></td>  </tr></table>`;
    let nad = document.getElementsByClassName("nad");
    send.innerHTML = html;  
    namunaNo.style.display = "none";
    btn.style.display = "none";
    getData.style.display = "";
});
//array total value sum function
function arraySum(arr) {
    return arr.reduce((accumulator, currentValue) =>  accumulator + currentValue);
}

//  input data add in array
let no = [];
let xArray = [];
let rArray = [];
getData.addEventListener("click",() => {
    let nad = document.getElementsByClassName("nad");
    let n = (nad[0].value);
    let a2 = (nad[1].value);
    let d3 = (nad[2].value);
    let d4 = (nad[3].value);
    let xinputs = document.getElementsByClassName("X");
    let rinputs = document.getElementsByClassName("R");
    for ( i = 0; i < xinputs.length; i++) {
        xArray.push(Number(xinputs[i].value));
    }
    for ( i = 0; i < rinputs.length; i++) {
        rArray.push(Number(rinputs[i].value));
    }
    
});

    let noSum = [];
    let xArraySum = [];
    let rArraySum = [];
// array to creat table
getData.addEventListener("click",() => {
    let nad = document.getElementsByClassName("nad");
    let chartData = document.querySelector("#chartData");
    let n = (nad[0].value);
    let a2 = (nad[1].value);
    let d3 = (nad[2].value);
    let d4 = (nad[3].value);
    noSum.push(arraySum(no));
    xArraySum.push(arraySum(xArray));
    rArraySum.push(arraySum(rArray));
    let arrData = document.querySelector("#arrData");
    let arrayHtml = `<table class=""><thead><tr> <th>નિદર્શ ક્રમ</th><th>X̅</th><th>R</th> </tr></thead> <tbody>`;
    for ( a=0; a<xArray.length; a++ ) {
        arrayHtml += `<tr> <td>${no[a]}</td><td>${xArray[a]}</td><td>${rArray[a]}</td></tr>`;
    }
    arrayHtml += `<tr> <td><b>Total</b></td> <td><b>${xArraySum}</b></td> <td><b>${rArraySum}</b></td> </tr>`;
    arrayHtml += `</tbody> </table>`;

    arrData.innerHTML = arrayHtml;
    

    let xrDiv = document.createElement("div");
    let _X_ = xArraySum / no.length;
    let _R_ = rArraySum / no.length;
    let methData = `<table class=""><tr><td><math xmlns='http://www.w3.org/1998/Math/MathML'><mi> &#x00B5;</mi> <mo> = </mo> <mfrac> <mrow> <mo> &#x2211;</mo> <mover> <mrow> <mi> X </mi> </mrow> <mrow> <mo> __ </mo> </mrow> </mover> </mrow> <mrow> <mi> m </mi> </mrow> </mfrac> <mo> = </mo> <mfrac> <mrow> <mn> ${xArraySum} </mn> </mrow> <mrow> <mn> ${no.length} </mn> </mrow> </mfrac> <mo> = </mo> <mn><b> ${_X_} </b></mn> </math> </td></tr>`
    methData += `<tr><td><math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> R </mi> </mrow> <mrow> <mo> __ </mo> </mrow> </mover> <mo> = </mo> <mfrac> <mrow> <mo> &#x2211; </mo> <mi> R </mi> </mrow> <mrow> <mi> M </mi> </mrow> </mfrac> <mo> = </mo> <mfrac> <mrow> <mn> ${rArraySum} </mn> </mrow> <mrow> <mn> ${no.length} </mn> </mrow> </mfrac> <mo> = </mo> <mn> <b> ${_R_} </b> </mn> </math> </td></tr></table>`;
    xrDiv.classList.add("xrDiv");
    xrDiv.innerHTML = methData;
    arrData.append(xrDiv);
    let xcl = document.createElement("div");
    let cl = document.querySelector("#cl")

    xcl.classList.add("xcl");
    
    let xclData = `<p id="chName">X̅ આલેખ નિયંત્રણ સીમાઓ</P> <table class=""><tr><td><b>C.L. = X̅ = ${xArraySum / no.length}</b></td></tr></table>`
    xclData += `<table class="">
                    <tr><td>U.C.L. = X̅ + A<sub>2</sub>R</td></tr>
                    <tr><td>U.C.L. = ${_X_} + ${a2}(${_R_})</td></tr>
                    <tr><td>U.C.L. = ${_X_}  + ${a2 * _R_}</td></tr>
                    <tr><td><b>U.C.L. = ${_X_ + a2 * _R_}</b></td></tr>
                </table>`
    xclData += `<table class="">
                <tr><td>L.C.L. = X̅ - A<sub>2</sub>R</td></tr>
                <tr><td>L.C.L. = ${_X_} - ${a2}(${_R_})</td></tr>
                <tr><td>L.C.L. = ${_X_}  - ${a2 * _R_}</td></tr>
                <tr><td><b>L.C.L. = ${_X_ - a2 * _R_}</b></td></tr>
            </table>`
    xcl.innerHTML = xclData;
    cl.append(xcl);
    // chart creat

    let rcl = document.createElement("div");
    rcl.classList.add("rcl");
    let rclData = `<p id="chName">R આલેખ નિયંત્રણ સીમાઓ</P> <table class=""><tr><td><b>C.L. = R = ${_R_}</b></td></tr></table>`
    rclData += `<table >
                    <tr><td>U.C.L. = D<sub>4</sub>R</td></tr>
                    <tr><td>U.C.L. = ${d4} * ${_R_}</td></tr>
                    <tr><td><b>U.C.L. = ${d4 * _R_}</></td></tr>
                </table>`
    rclData += `<table class="">
                <tr><td>L.C.L. = D<sub>3</sub>R</td></tr>
                <tr><td>L.C.L. = ${d3} * ${_R_}</td></tr>
                <tr><td><b>L.C.L. = ${d3 * _R_}</b></td></tr>
            </table>`
    rcl.innerHTML = rclData;
    cl.append(rcl);
    

    // chrt creat
    showChart.style.display="";
let x = no;
let y = xArray;
let y1 = rArray;
//xchart data
let centerLine = _X_;
let upperControlLimit = _X_ + a2 * _R_;
let lowerControlLimit = _X_ - a2 * _R_;
// rchart data
let rcenterLine = _R_;
let rupperControlLimit = d4 * _R_;
let rlowerControlLimit = d3 * _R_;
    // Prepare data for Chart.js - Chart 1 (y)
let data1 = {
    labels: x,
    datasets: [{
                label: 'X Chart',
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
        
        // Prepare data for Chart.js - Chart 2 (y1)
        let data2 = {
            labels: x,
            datasets: [{
                label: 'R Chart',
                data: y1,
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.1)',
                borderWidth: 1
            }, {
                label: 'U.C.L.',
                data: Array(x.length).fill(rupperControlLimit),
                borderColor: 'green',
                borderWidth: 1.9,
                borderDash: [10, 3],
                fill: false,
                pointRadius: 0
            },
            {
                label: 'C.L',
                data: Array(x.length).fill(rcenterLine),
                borderColor: 'black',
                borderWidth: 1.9,
                borderDash: [0,0],
                fill: false,
                pointRadius: 0
            }, {
                label: 'L.C.L.',
                data: Array(x.length).fill(rlowerControlLimit),
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
                // duration: 2000, // 2 seconds animation
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

        // Create Chart 2 on the canvas element
        let ctx2 = document.getElementById('chart2').getContext('2d');
        let chart2 = new Chart(ctx2, {
            type: 'line',
            data: data2,
            options: options
        });  

       // show the disizan
        let xuclidx = [];
        let ruclidx = [];


        for (let i = 0; i < xArray.length; i++) {
            if (xArray[i] > upperControlLimit) {
                xuclidx.push(i+1);
            }
            if (xArray[i] < lowerControlLimit) {
                xuclidx.push(i+1);
            }
        }
        for (let i = 0; i < rArray.length; i++) {
            if (rArray[i] > rupperControlLimit) {
                ruclidx.push(i+1);
            }
            if (rArray[i] < rlowerControlLimit) {
                ruclidx.push(i+1);
            }
        }

        let XBar = document.querySelector("#XBar");
        if(xuclidx.length === 0 ) {
            XBar.innerHTML = `<p><samp></samp><b>નિર્ણય : X̅</b> નકશામાં બધાં જ બિંદુઓ નિયંત્રણ સીમાઓની વચમાં પડતાં હોવાથી વિસ્તાર <b>X̅ ને અનુલક્ષીને ઉત્પાદન પ્રક્રિયા નિયંત્રણ હેઠળ છે.</b></p>`
        }else {
            let xHTMLDisiza = `<p><samp></samp><b>નિર્ણય : X̅</b> નકશામાં નિદર્શનંબર <b>${xuclidx}</b> નાં અવલોકનબિંદુઓ નિયંત્રણ સીમાની બહાર પડે છે, <b>તેથી સરેરાશ X̅ ને અનુલક્ષીને ઉત્પાદન પ્રક્રિયા નિયંત્રણમાં નથી.</b></p>`;
            XBar.innerHTML = xHTMLDisiza;
        }
        if (ruclidx.length === 0 ) {
            XBar.innerHTML += `<p><samp></samp> <b>R</b> નકશામાં બધાં જ બિંદુઓ નિયંત્રણ સીમાઓની વચમાં પડતાં હોવાથી વિસ્તાર <b>R ને અનુલક્ષીને ઉત્પાદન પ્રક્રિયા નિયંત્રણ હેઠળ છે.</b></p>`;
        }else {
            XBar.innerHTML += `<p><samp></samp>જ્યારે <b>R<b> નકશામાં નિદર્શનંબર <b>${ruclidx}</b> નાં અવલોકનબિંદુઓ નિયંત્રણ સીમાની બહાર પડે છે, <b>તેથી સરેરાશ R ને અનુલક્ષીને ઉત્પાદન પ્રક્રિયા નિયંત્રણમાં નથી.</b></p>`;
        }
       
        
});
