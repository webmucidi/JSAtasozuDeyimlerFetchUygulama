
/*
function verileriYukle(){
  fetch("https://sozluk.gov.tr/atasozu")
  .then((gelen) => gelen.json())
  .then((veri) => console.log(veri))
}
*/
const sonuc=document.getElementById("sonuc");
const aramaListesi=document.getElementById("aramaListesi");
const aramaKutusu=document.getElementById("aramaKutusu");

const anahtarKelimeler=[];
const sozler=[];

verileriYukle();

async function verileriYukle(){
  const gelen=await fetch("https://sozluk.gov.tr/atasozu");
  let veri=await gelen.json();
  console.log(veri);

  veri.forEach(eleman => {
    const yeni=document.createElement("option");
    aramaListesi.appendChild(yeni);
    yeni.value=eleman.anahtar;
    anahtarKelimeler.push(yeni);
    sozler.push(eleman.sozum);
  })
}

aramaKutusu.addEventListener("input",(e) => sonuclariAra(e.target.value));

function sonuclariAra(arananKelime){
  sonuc.innerHTML="";

  sozler.forEach(soz => {
    if(soz.includes(arananKelime)){
      sonuc.innerHTML=soz;
      sonuc.classList.remove("sakla");
    }
    else{
      sonuc.classList.add("sakla");
    }
  })
}