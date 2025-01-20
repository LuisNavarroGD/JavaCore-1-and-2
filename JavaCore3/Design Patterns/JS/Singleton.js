class Singleton {
    constructor() {

        this.random = Math.random();

        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const Singleton2 = new Singleton();
const singleton = new Singleton();
console.log(singleton.random);
console.log(Singleton2.random);

class Weekdays{
    dayEs = [
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sabado',
        'domingo'
    ]

    daysEn = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ]

    constructor(lang){
        this.lang = lang;

        if(Weekdays.instance){
            return Weekdays.instance;
        }

        Weekdays.instance = this;
    }

    getDays(){
        return this.lang === 'en' ? this.daysEn : this.dayEs;
    }
}

const WeekdaysEs = new Weekdays('es');
const WeekdaysEn = new Weekdays('en');
console.log(WeekdaysEs.getDays());
console.log(WeekdaysEn.getDays());
