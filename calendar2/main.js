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

let dateCount = 0;

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

const monday = new myDay([-6,1]);
const tuesday = new myDay([-5,2]);
const wednesday = new myDay([-4,3]);
const thursday = new myDay([-3,4]);
const friday = new myDay([-2,5]);
const saturday = new myDay([-1,6]);
const sunday = new myDay([0,7]);


function getMyWeek(count = 0){
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+count);
    return nextweek;
}

function writeDate() {
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
}




writeDate();

prevBtn.addEventListener('click', () => {
    dateCount -= 7;
    writeDate();
});

nextBtn.addEventListener('click', () => {
    dateCount += 7;
    writeDate();
});