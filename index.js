// Değişken tanımı 3 şekilde yapılır: var let ve const
/* 
var: Fonksiyon scope'una sahiptir. Yeniden tanımlanabilir ve güncellenebilir.
let: Blok scope'una sahiptir. Yeniden tanımlanamaz ancak güncellenebilir.
const: Blok scope'una sahiptir. Ne yeniden tanımlanabilir ne de güncellenebilir. Güvenlik için oluşturuldu.

ECMASCRIT Standartları: Standartlaştırma protokolü. Programlama dili kavramlarını standartlaştırmak için oluşturulan bir dökümantasyon 
dır. JavaScript'in farklı ortamlarda (tarayıcı, sunucu vb.) tutarlı bir şekilde çalışmasını sağlar. Bu standartlar, dilin sözdizimi, veri tipleri, nesne yapıları ve diğer özelliklerini tanımlar.


 */

/*
var adi="Ahmet";
console.log(adi);

let yas=27
console.log(yas)

const dogumYili=1998;
console.log(dogumYili);

*/

// Değişken tanımı 3 şekilde yapılır: var let ve const
/* 
var: Fonksiyon scope'una sahiptir. Yeniden tanımlanabilir ve güncellenebilir.
let: Blok scope'una sahiptir. Yeniden tanımlanamaz ancak güncellenebilir.
const: Blok scope'una sahiptir. Ne yeniden tanımlanabilir ne de güncellenebilir. Güvenlik için oluşturuldu.

ECMASCRIT Standartları: Standartlaştırma protokolü. Programlama dili kavramlarını standartlaştırmak için oluşturulan bir dökümantasyon 
dır. JavaScript'in farklı ortamlarda (tarayıcı, sunucu vb.) tutarlı bir şekilde çalışmasını sağlar. Bu standartlar, dilin sözdizimi, veri tipleri, nesne yapıları ve diğer özelliklerini tanımlar.


 */

// Örnek fonksiyonlar ve kullanım
function addToCart(urun_adi, adet, fiyat){
    console.log(`Sepete eklendi: ${urun_adi} - Adet: ${adet} - Fiyat: ${fiyat}`);
}

addToCart("Elma", 5, 10);
addToCart("Armut", 3, 15);
addToCart("Limon", 2, 8);

// Ürünleri dizi olarak tanımlayalım
const urunler = [
    { urun_adi: "Elma", adet: 5, fiyat: 10 },
    { urun_adi: "Armut", adet: 3, fiyat: 15 },
    { urun_adi: "Limon", adet: 2, fiyat: 8 }
];

function addToCart2(urun){
    console.log(`Ürün: ${urun.urun_adi} Adet: ${urun.adet} Fiyat: ${urun.fiyat}`);
}

// Tüm ürünleri ekleyelim
for (const u of urunler){
    addToCart2(u);
}


/*
let [urunler_adi,adet,fiyat]=[
    {urun_adi: "Elma",adet:5,fiyat:10},
    {urun_adi: "Armut",adet:3,fiyat:15},
    {urun_adi: "Limon",adet:2,fiyat:8},
]
console.log(urunler_adi);
console.log(adet);
console.log(fiyat);
*/

//filter
const sayilar=[1,2,3,4,5,6,7,8,9,10];
const tekSayilar=sayilar.filter(sayi=>sayi%2!==0);
console.log(tekSayilar); // [1, 3, 5, 7, 9]
const ciftSayilar=sayilar.filter(sayi=>sayi%2===0);
console.log(ciftSayilar); // [2, 4, 6, 8, 10]

//find
const numbers=[10,20,30,40,50];
const foundNumber=numbers.find(num=>num>25);
console.log(foundNumber); // 30

//map fonksiyonu
const num=[1,2,3,4,5];

const total=num.map(n=>n*2);
console.log(total); // [2, 4, 6, 8, 10]

//reduce fonksiyonu
const values=[1,2,3,4,5];
const sum=values.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum); // 15 


//forEach Fonksiyonu
const fruits=["Elma","Armut","Muz"];
fruits.forEach(fruit=>console.log(fruit));
// Elma
// Armut
// Muz

//Hata Denitimi
try {
    const result=10/0
    console.log(result)
}
catch (error) {
    console.log("Hata oluştu: "+error.message);
}
finally {
    console.log("Hata denetimi tamamlandı.");
}

//Thro Hata Yakalama
function bolmeislemi(a,b){
    if (b===0){
        throw new Error("Bölen sıfır olamaz.");
    }
    return a/b;
}
try {
    const sonuc=bolmeislemi(10,0);
    console.log(sonuc);
}
catch (error) {
    console.log("Hata oluştu: "+error.message);
}  