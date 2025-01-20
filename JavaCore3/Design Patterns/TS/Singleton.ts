class SingletonTS {

    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            this.instance = new SingletonTS();
        }
        return this.instance;
    }
}

const singleton1 = SingletonTS.getInstance();
const singleton2 = SingletonTS.getInstance();
const singleton3 = SingletonTS.getInstance();

singleton1.random = 10;

console.log(singleton3.random);
console.log(singleton1.random);
console.log(singleton2.random);