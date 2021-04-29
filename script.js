
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
    anahtarKelimeler.push(eleman.anahtar);
    sozler.push(eleman.sozum);
  })


const birlesmisKelimeler = [...new Set(anahtarKelimeler)];
console.log(birlesmisKelimeler);

let sayac=0;
birlesmisKelimeler.sort(() => Math.random() - 0.5);
birlesmisKelimeler.forEach(kelime => {
  if(sayac<5){
    const yeni=document.createElement("option");
    aramaListesi.appendChild(yeni);
    yeni.value=kelime;
    }
    sayac++;
})
}

aramaKutusu.addEventListener("input",(e) => sonuclariAra(e.target.value));

function sonuclariAra(arananKelime){
  sonuc.innerHTML="";
  let aramaKurali = new RegExp(arananKelime, 'gi');
  let eslesenler=sozler.filter(soz => aramaKurali.test(soz));
  
  if(arananKelime.length < 3){
    eslesenler=[];
  }

  eslesenler.forEach(es => {
    
    const siradakiSonuc=document.createElement("li");
    sonuc.appendChild(siradakiSonuc);
    siradakiSonuc.innerHTML=es;
  
  })
}