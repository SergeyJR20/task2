class  manufacturer {
    constructor(name){
        this.name = name;
        this.prProduct = 0;
    }
   produce(){
        this.prProduct += Math.floor(Math.random() * 100 + 50);
        //console.log('qwew', this.prProduct)
        return this.prProduct;
    }
   
}
let prProduct = new manufacturer;

class consumer{
    constructor(name){
        this.name = name;
        this.getProduct = 0;
    }
    need(){
        this.getProduct += Math.floor(Math.random() * 50 + 70) - a;
        return this.getProduct;
    }
}
let getProduct = new consumer;

class agent{
    trayProduct = 0;
 tray(a, b) {
     //console.log('a',getProduct.need(), 'b', prProduct.produce())
        if (b > 100 ){ 
            this.trayProduct = b;
        }
        else{
            this.trayProduct = 100;
        }
       if(a < this.trayProduct){
            this.trayProduct = a;
     }
     return this.trayProduct;
      }

    constructor(name){
        this.name = name ;
    }
}

let trayProduct = new agent;
//console.log(prProduct.produce());

let countPr = 0;
let KPD = 0;
let countPot = 0;
let countDos = 0;
let countPr3 = 0;
let countDos3 = 0;
let a = 0;
let b = 0;
let exP = [];

for (i = 0; i < 10; i++) {
let a = prProduct.produce();
let b = getProduct.need();
 exP[i] = {
     countPr: a,
     countPot: b,
     countDos: trayProduct.tray(a, b)
 };
}

console.table(exP);



/*
function Create2DArray(rows) {
    var arr = [];
  
    for (var i=0; i<rows; i++) {
       arr[i] = [];
    }
  
    return arr;
}

let Patronus =Create2DArray(10);
let a, b;

for(let i = 0 ; i < 10; i++){
    for( let j = 0; j < 3; j++){
    
    if(j == 0)   
          Patronus[i][0] = prProduct.produce();
          b = Patronus[i][j];
          console.log('i', i, 'j', j, "b" , b)
    if(j == 1)
         Patronus[i][1] = getProduct.need();
         a = Patronus[i][j];
         console.log('i', i, 'j', j, "a" , a)
    if (j == 2)
    Patronus[i][2] =trayProduct.tray(a, b);
     //Patronus[i][j] = 0;
     //console.log(Patronus[i][j]);
    
    }
 //console.log("\n");
}
console.table(Patronus);

/*
countPr = prProduct.produce();
countPot = getProduct.need();
console.log(countPr + "/" + countPot + "/" + );
*/