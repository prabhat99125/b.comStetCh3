let xuclidx = [];
let ruclidx = [];
console.log(ruclidx);
getData.addEventListener("click",() => {
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