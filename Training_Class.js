class discipline{
     constructor(name){
         this.name = name;
     }
}

let Kurse = new discipline ("JS");

class theme { 
    constructor(name){
        this.name = name;
    }

}

class question {
    constructor(name){
        this.name = name;
    }
}

class answer {
    constructor(name, correctness ){
        this.name = name;
        this.correctness = correctness;
    }
}