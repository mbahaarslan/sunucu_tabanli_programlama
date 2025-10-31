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

/*
// ecmaScript öncesi
function topla(x,y){
    return x+y;
}
console.log(topla(3,5));

// ecmaScript sonrası (ES6 - ECMAScript 2015) Arrow Function
const carp=(x,y)=> x*y;
console.log(carp(3,5));

*/

/*
let x=10
if (x==10) {
    let mesaj="x 10'a eşittir";
    console.log(mesaj);
}
*/

/*
let total=0
for (let i=0;i<10;i++){
    total+=i;
}
*/

// var ile let arasındaki farklar
// var function scope - let ise block scope özelliğine sahiptir. Let sadece bulunduğu süslü parantez içinde kullanılabilir.


/*
function test(){
    if (true){
        var degisken="merhaba";
    }
    if (true){
        console.log(degisken); // var ile tanımlandığı için fonksiyon içinde her yerden erişilebilir.
    }    
}
test(); 
function test2(){
    if (true){
        let degisken2="merhaba let";
    }
    if (true){
        console.log(degisken2); // let ile tanımlandığı için sadece bulunduğu blok içinde erişilebilir. Hata verir.
    }
}
*/

//Tekrar Tanımlama Özelliği
/*

var adi="Baha"
var adi="Ahmet"
console.log(adi)

let adres="İzmir"
adres="Ankara"
console.log(adres)
*/

/*
let yas=20
let yas=25 // Hata verir
*/

//Hoisting Kavramı
// var ile tanımlanan değişkenler hoisting'e tabidir. let ve const ile tanımlanan değişkenler hoisting'e tabi değildir.

/*
adi="Can"
const adress="İstanbul"

adi="ahmet"
adress="Ankara" // Hata verir

console.log(adi)
var adi

*/

//rest operatörü öncesinde arguments nesnesi

/*
function add(){
    console.log(arguments);
    let total=0;
    for (let i=0;i<arguments.length;i++){
        total+=arguments[i];
    }
    return total;
}
console.log(add(1,2,3,4,5,6));
*/

//rest

/*
const add=(...args)=>{
console.log(args);
let total=0;
for (let i=0;i<args.length;i++){
    total+=args[i];
}
    return total;
}
console.log(add(1,2,3,4,5,6));
*/
/*
function addToCart(urun_adi,adet,fiyat){

}
addToCart("Elma",5,10);
addToCart("Armut",3,15);
addToCart("Limon",2,8);



let urunler = [
    {
        urun_adi: "Elma",
        adet: 5,
        fiyat: 10
    },
    {
        urun_adi: "Armut",
        adet: 3,
        fiyat: 15
    },
    {
        urun_adi: "Limon",
        adet: 2,
        fiyat: 8
    }
]
function addToCart2(urun){
    console.log(`Ürün: ${urun.urun_adi} Adet: ${urun.adet} Fiyat: ${urun.fiyat}`);
}
*/
/*
// Tüm ürünleri döngü ile ekleyelim
urunler.forEach(urun => addToCart2(urun));

//distracting Yöntemi
let bolgeler = ["Marmara", "Ege", "Akdeniz", "Karadeniz", "İç Anadolu"];
console.log(bolgeler[0]);
console.log(bolgeler[1]);

let [icAnadolu, marmara, ege, akdeniz, karadeniz] = ["Marmara", "Ege", "Akdeniz", "Karadeniz", "İç Anadolu"];
console.log(marmara);
console.log(ege);
// Veri tabanlarında indexleme yöntemi yeni veriler gelip değişebileceği için mantıklı değil. Bu yüzden sütun adı kullanıılır.

let region = {name: "İç Anadolu", population: "20M"};
console.log(region.name);
*/
/*
let [urun_adi,adet,fiyat] = ["Elma",5,10];
console.log(urun_adi);
console.log(adet);
console.log(fiyat);
*/

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
