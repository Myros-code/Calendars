
let time = document.querySelectorAll('.time');

time.forEach((item)=>{
    item.addEventListener('click',(event) =>{
        event.target.classList.toggle('active');
    })
});

const monNum = document.querySelector('#monNum');
const tueNum = document.querySelector('#tueNum');
const wedNum = document.querySelector('#wedNum');
const thuNum = document.querySelector('#thuNum');
const friNum = document.querySelector('#friNum');
const satNum = document.querySelector('#satNum');
const sunNum = document.querySelector('#sunNum');

const month = document.querySelector('#month');
const year = document.querySelector('#year');

const prevBtn = document.querySelector('.date-nav__btn.prev');
const nextBtn = document.querySelector('.date-nav__btn.next');

let dateCount = 0;

const monthArr = [
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
            dateYear: date.getFullYear(),
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
}

writeDate();
year.innerHTML = new Date().getFullYear();
month.innerHTML = monthArr[new Date().getMonth()];

prevBtn.addEventListener('click', () => {
    dateCount -= 7;
    writeDate();
    year.innerHTML = monday.giveMeDate(getMyWeek(dateCount)).dateYear;
    month.innerHTML = monthArr[monday.giveMeDate(getMyWeek(dateCount)).dateMonth];
});

nextBtn.addEventListener('click', () => {
    dateCount += 7;
    writeDate();
    year.innerHTML = monday.giveMeDate(getMyWeek(dateCount)).dateYear;
    month.innerHTML = monthArr[monday.giveMeDate(getMyWeek(dateCount)).dateMonth];
});