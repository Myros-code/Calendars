const monField = document.querySelector('#mon');
const tueField = document.querySelector('#tue');
const wedField = document.querySelector('#wed');
const thuField = document.querySelector('#thu');
const friField = document.querySelector('#fri');
const satField = document.querySelector('#sat');
const sunField = document.querySelector('#sun');

const monNum = document.querySelector('#monNum');
const tueNum = document.querySelector('#tueNum');
const wedNum = document.querySelector('#wedNum');
const thuNum = document.querySelector('#thuNum');
const friNum = document.querySelector('#friNum');
const satNum = document.querySelector('#satNum');
const sunNum = document.querySelector('#sunNum');

const monMonth = document.querySelector('#monMonth');
const tueMonth = document.querySelector('#tueMonth');
const wedMonth = document.querySelector('#wedMonth');
const thuMonth = document.querySelector('#thuMonth');
const friMonth = document.querySelector('#friMonth');
const satMonth = document.querySelector('#satMonth');
const sunMonth = document.querySelector('#sunMonth');

const prevBtn = document.querySelector('.date-nav__btn.prev');
const nextBtn = document.querySelector('.date-nav__btn.next');

const month = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
];

class myDay {

    constructor(param) { 
        this.param = param; 
    }

    giveMeDate(d) {
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? this.param[0] : this.param[1]); // adjust when day is sunday
        let date = new Date(d.setDate(diff))
        return {
            date,
            dateNum : date.getDate(),
            dateMonth : date.getMonth(),
        }
    }

}


function getMyWeek(count){
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+count);
    return nextweek;
}


const monday = new myDay([-6,1]);
const tuesday = new myDay([-5,2]);
const wednesday = new myDay([-4,3]);
const thursday = new myDay([-3,4]);
const friday = new myDay([-2,5]);
const saturday = new myDay([-1,6]);
const sunday = new myDay([0,7]);

monNum.innerHTML = monday.giveMeDate(new Date()).dateNum;
tueNum.innerHTML = tuesday.giveMeDate(new Date()).dateNum;
wedNum.innerHTML = wednesday.giveMeDate(new Date()).dateNum;
thuNum.innerHTML = thursday.giveMeDate(new Date()).dateNum;
friNum.innerHTML = friday.giveMeDate(new Date()).dateNum;
satNum.innerHTML = saturday.giveMeDate(new Date()).dateNum;
sunNum.innerHTML = sunday.giveMeDate(new Date()).dateNum;

console.log(monday.giveMeDate(new Date()));
console.log(tuesday.giveMeDate(new Date()));
console.log(wednesday.giveMeDate(new Date()));
console.log(thursday.giveMeDate(new Date()));
console.log(friday.giveMeDate(new Date()));
console.log(saturday.giveMeDate(new Date()));
console.log(sunday.giveMeDate(new Date()));

monMonth.innerHTML = month[monday.giveMeDate(new Date()).dateMonth];
tueMonth.innerHTML = month[tuesday.giveMeDate(new Date()).dateMonth];
wedMonth.innerHTML = month[wednesday.giveMeDate(new Date()).dateMonth];
thuMonth.innerHTML = month[thursday.giveMeDate(new Date()).dateMonth];
friMonth.innerHTML = month[friday.giveMeDate(new Date()).dateMonth];
satMonth.innerHTML = month[saturday.giveMeDate(new Date()).dateMonth];
sunMonth.innerHTML = month[sunday.giveMeDate(new Date()).dateMonth];


let dateCount = 0;

prevBtn.addEventListener('click', () => {
    dateCount -= 7;
    nextweek(dateCount);
    // let r = new Date();
    // let day = r.getDay();
    // let diff = r.getDate() + dateCount; // adjust when day is sunday
    // let newdAta = new Date(r.setDate(diff));

    // console.log(monday.giveMeDate(newdAta));
    // console.log('prev');
    // console.log(dateCount);

    monNum.innerHTML = monday.giveMeDate(getMyWeek(dateCount)).dateNum;
    tueNum.innerHTML = tuesday.giveMeDate(getMyWeek(dateCount)).dateNum;
    wedNum.innerHTML = wednesday.giveMeDate(getMyWeek(dateCount)).dateNum;
    thuNum.innerHTML = thursday.giveMeDate(getMyWeek(dateCount)).dateNum;
    friNum.innerHTML = friday.giveMeDate(getMyWeek(dateCount)).dateNum;
    satNum.innerHTML = saturday.giveMeDate(getMyWeek(dateCount)).dateNum;
    sunNum.innerHTML = sunday.giveMeDate(getMyWeek(dateCount)).dateNum;

    monMonth.innerHTML = month[monday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    tueMonth.innerHTML = month[tuesday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    wedMonth.innerHTML = month[wednesday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    thuMonth.innerHTML = month[thursday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    friMonth.innerHTML = month[friday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    satMonth.innerHTML = month[saturday.giveMeDate(getMyWeek(dateCount)).dateMonth];
    sunMonth.innerHTML = month[sunday.giveMeDate(getMyWeek(dateCount)).dateMonth];


    console.log(monday.giveMeDate(nextweek(dateCount)));
    console.log(tuesday.giveMeDate(nextweek(dateCount)));
    console.log(wednesday.giveMeDate(nextweek(dateCount)));
    console.log(thursday.giveMeDate(nextweek(dateCount)));
    console.log(friday.giveMeDate(nextweek(dateCount)));
    console.log(saturday.giveMeDate(nextweek(dateCount)));
    console.log(sunday.giveMeDate(nextweek(dateCount)));


    // monNum.innerHTML = monday.giveMeDate(newdAta).dateNum;
    // tueNum.innerHTML = tuesday.giveMeDate(newdAta).dateNum;
    // wedNum.innerHTML = wednesday.giveMeDate(newdAta).dateNum;
    // thuNum.innerHTML = thursday.giveMeDate(newdAta).dateNum;
    // friNum.innerHTML = friday.giveMeDate(newdAta).dateNum;
    // satNum.innerHTML = saturday.giveMeDate(newdAta).dateNum;
    // sunNum.innerHTML = sunday.giveMeDate(newdAta).dateNum;

    // monMonth.innerHTML = month[monday.giveMeDate(newdAta).dateMonth];
    // tueMonth.innerHTML = month[tuesday.giveMeDate(newdAta).dateMonth];
    // wedMonth.innerHTML = month[wednesday.giveMeDate(newdAta).dateMonth];
    // thuMonth.innerHTML = month[thursday.giveMeDate(newdAta).dateMonth];
    // friMonth.innerHTML = month[friday.giveMeDate(newdAta).dateMonth];
    // satMonth.innerHTML = month[saturday.giveMeDate(newdAta).dateMonth];
    // sunMonth.innerHTML = month[sunday.giveMeDate(newdAta).dateMonth];


});

nextBtn.addEventListener('click', () => {
    console.log('next');
    dateCount += 7;

    let z = new Date();
    let day = z.getDay();
    let diff = z.getDate() + dateCount; // adjust when day is sunday
    let newdAta = new Date(z.setDate(diff));

    console.log(monday.giveMeDate(newdAta));
    console.log('next');
    console.log(dateCount);


    monNum.innerHTML = monday.giveMeDate(newdAta).dateNum;
    tueNum.innerHTML = tuesday.giveMeDate(newdAta).dateNum;
    wedNum.innerHTML = wednesday.giveMeDate(newdAta).dateNum;
    thuNum.innerHTML = thursday.giveMeDate(newdAta).dateNum;
    friNum.innerHTML = friday.giveMeDate(newdAta).dateNum;
    satNum.innerHTML = saturday.giveMeDate(newdAta).dateNum;
    sunNum.innerHTML = sunday.giveMeDate(newdAta).dateNum;

    monMonth.innerHTML = month[monday.giveMeDate(newdAta).dateMonth];
    tueMonth.innerHTML = month[tuesday.giveMeDate(newdAta).dateMonth];
    wedMonth.innerHTML = month[wednesday.giveMeDate(newdAta).dateMonth];
    thuMonth.innerHTML = month[thursday.giveMeDate(newdAta).dateMonth];
    friMonth.innerHTML = month[friday.giveMeDate(newdAta).dateMonth];
    satMonth.innerHTML = month[saturday.giveMeDate(newdAta).dateMonth];
    sunMonth.innerHTML = month[sunday.giveMeDate(newdAta).dateMonth];


});