let namNo = namunaNo.value;
let iptChart = document.getElementsByClassName("iptChart");
let iptArray = [];



getData.addEventListener("click",() => {
    for(a=1; a<=namNo; a++) {
        iptArray.push(Number(iptChart[a].value));
    }
    console.log(iptArray,namNo);
});
