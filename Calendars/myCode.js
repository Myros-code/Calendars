let time = document.querySelectorAll('.time');

time.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.classList.toggle('active');
    })
});

const monNum1 = document.querySelector('#monNum1');
const tueNum1 = document.querySelector('#tueNum1');
const wedNum1 = document.querySelector('#wedNum1');
const thuNum1 = document.querySelector('#thuNum1');
const friNum1 = document.querySelector('#friNum1');
const satNum1 = document.querySelector('#satNum1');
const sunNum1 = document.querySelector('#sunNum1');

const month1 = document.querySelector('#month1');
const year1 = document.querySelector('#year1');

const prevBtn1 = document.querySelector('.date-nav__btn1.prev');
const nextBtn1 = document.querySelector('.date-nav__btn1.next');

let dateCount1 = 0;

const monthArr1 = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

class myDay1 {

    constructor(param1) {
        this.param1 = param1;
    }

    giveMeDate(d) {
        d = new Date(d);
        let day = d.getDay();
        let diff = d.getDate() - day + (day == 0 ? this.param1[0] : this.param1[1]); // adjust when day is sunday
        let date = new Date(d.setDate(diff))
        return {
            date,
            dateNum: date.getDate(),
            dateMonth: date.getMonth(),
            dateYear: date.getFullYear(),
        }
    }

}

const monday1 = new myDay1([-6, 1]);
const tuesday1 = new myDay1([-5, 2]);
const wednesday1 = new myDay1([-4, 3]);
const thursday1 = new myDay1([-3, 4]);
const friday1 = new myDay1([-2, 5]);
const saturday1 = new myDay1([-1, 6]);
const sunday1 = new myDay1([0, 7]);


function getMyWeek1(count = 0) {
    let today = new Date();
    let nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + count);
    return nextweek;
}

function writeDate1() {
    monNum1.innerHTML = monday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    tueNum1.innerHTML = tuesday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    wedNum1.innerHTML = wednesday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    thuNum1.innerHTML = thursday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    friNum1.innerHTML = friday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    satNum1.innerHTML = saturday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
    sunNum1.innerHTML = sunday1.giveMeDate(getMyWeek1(dateCount1)).dateNum;
}

writeDate1();
year1.innerHTML = new Date().getFullYear();
month1.innerHTML = monthArr1[new Date().getMonth()];

prevBtn1.addEventListener('click', () => {
    dateCount1 -= 7;
    writeDate1();
    year1.innerHTML = monday1.giveMeDate(getMyWeek1(dateCount1)).dateYear;
    month1.innerHTML = monthArr1[monday1.giveMeDate(getMyWeek1(dateCount1)).dateMonth];
});

nextBtn1.addEventListener('click', () => {
    dateCount1 += 7;
    writeDate1();
    year1.innerHTML = monday1.giveMeDate(getMyWeek1(dateCount1)).dateYear;
    month1.innerHTML = monthArr1[monday1.giveMeDate(getMyWeek1(dateCount1)).dateMonth];
});




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
            dateNum: date.getDate(),
            dateMonth: date.getMonth(),
        }
    }

}

const monday = new myDay([-6, 1]);
const tuesday = new myDay([-5, 2]);
const wednesday = new myDay([-4, 3]);
const thursday = new myDay([-3, 4]);
const friday = new myDay([-2, 5]);
const saturday = new myDay([-1, 6]);
const sunday = new myDay([0, 7]);


function getMyWeek(count = 0) {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + count);
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