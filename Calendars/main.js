  var monNum = document.querySelector("#monNum");
  var tueNum = document.querySelector("#tueNum");
  var wedNum = document.querySelector("#wedNum");
  var thuNum = document.querySelector("#thuNum");
  var friNum = document.querySelector("#friNum");
  var satNum = document.querySelector("#satNum");
  var sunNum = document.querySelector("#sunNum");
  var monMonth = document.querySelector("#monMonth");
  var tueMonth = document.querySelector("#tueMonth");
  var wedMonth = document.querySelector("#wedMonth");
  var thuMonth = document.querySelector("#thuMonth");
  var friMonth = document.querySelector("#friMonth");
  var satMonth = document.querySelector("#satMonth");
  var sunMonth = document.querySelector("#sunMonth");
  var prevBtn = document.querySelector(".date-nav__btn.prev");
  var nextBtn = document.querySelector(".date-nav__btn.next");
  var time = document.querySelectorAll(".time");
  var dateCount = 0;
  var month = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек"
  ];


  var monNum1 = document.querySelector("#monNum1");
  var tueNum1 = document.querySelector("#tueNum1");
  var wedNum1 = document.querySelector("#wedNum1");
  var thuNum1 = document.querySelector("#thuNum1");
  var friNum1 = document.querySelector("#friNum1");
  var satNum1 = document.querySelector("#satNum1");
  var sunNum1 = document.querySelector("#sunNum1");
  var month1 = document.querySelector("#month1");
  var year1 = document.querySelector("#year1");
  var prevBtn1 = document.querySelector(".date-nav__btn1.prev");
  var nextBtn1 = document.querySelector(".date-nav__btn1.next");
  var dateCount1 = 0;
  var monthArr1 = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
  ];



  function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
      }
  }

  function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
      }
  }

  function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
  }



  var myDay = /*#__PURE__*/ (function () {
      "use strict";

      function myDay(param) {
          _classCallCheck(this, myDay);

          this.param = param;
      }

      _createClass(myDay, [{
          key: "giveMeDate",
          value: function giveMeDate(d) {
              d = new Date(d);
              var day = d.getDay();
              var diff =
                  d.getDate() - day + (day == 0 ? this.param[0] : this.param[1]); // adjust when day is sunday

              var date = new Date(d.setDate(diff));
              return {
                  date: date,
                  dateNum: date.getDate(),
                  dateMonth: date.getMonth()
              };
          }
      }]);

      return myDay;
  })();

  var monday = new myDay([-6, 1]);
  var tuesday = new myDay([-5, 2]);
  var wednesday = new myDay([-4, 3]);
  var thursday = new myDay([-3, 4]);
  var friday = new myDay([-2, 5]);
  var saturday = new myDay([-1, 6]);
  var sunday = new myDay([0, 7]);

  function getMyWeek() {
      var count =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var today = new Date();
      var nextweek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + count
      );
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
      tueMonth.innerHTML =
          month[tuesday.giveMeDate(getMyWeek(dateCount)).dateMonth];
      wedMonth.innerHTML =
          month[wednesday.giveMeDate(getMyWeek(dateCount)).dateMonth];
      thuMonth.innerHTML =
          month[thursday.giveMeDate(getMyWeek(dateCount)).dateMonth];
      friMonth.innerHTML = month[friday.giveMeDate(getMyWeek(dateCount)).dateMonth];
      satMonth.innerHTML =
          month[saturday.giveMeDate(getMyWeek(dateCount)).dateMonth];
      sunMonth.innerHTML = month[sunday.giveMeDate(getMyWeek(dateCount)).dateMonth];
  }

  writeDate();
  prevBtn.addEventListener("click", function () {
      dateCount -= 7;
      writeDate();
  });
  nextBtn.addEventListener("click", function () {
      dateCount += 7;
      writeDate();
  });








  time.forEach(function (item) {
      item.addEventListener("click", function (event) {
          event.target.classList.toggle("active");
      });
  });

  var myDay1 = /*#__PURE__*/ (function () {
      "use strict";

      function myDay1(param1) {
          _classCallCheck(this, myDay1);

          this.param1 = param1;
      }

      _createClass(myDay1, [{
          key: "giveMeDate",
          value: function giveMeDate(d) {
              d = new Date(d);
              var day = d.getDay();
              var diff =
                  d.getDate() - day + (day == 0 ? this.param1[0] : this.param1[1]); // adjust when day is sunday

              var date = new Date(d.setDate(diff));
              return {
                  date: date,
                  dateNum: date.getDate(),
                  dateMonth: date.getMonth(),
                  dateYear: date.getFullYear()
              };
          }
      }]);

      return myDay1;
  })();

  var monday1 = new myDay1([-6, 1]);
  var tuesday1 = new myDay1([-5, 2]);
  var wednesday1 = new myDay1([-4, 3]);
  var thursday1 = new myDay1([-3, 4]);
  var friday1 = new myDay1([-2, 5]);
  var saturday1 = new myDay1([-1, 6]);
  var sunday1 = new myDay1([0, 7]);

  function getMyWeek1() {
      var count =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var today = new Date();
      var nextweek = new Date(
          today.getFullYear(),
          today.getMonth(),
          today.getDate() + count
      );
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
  prevBtn1.addEventListener("click", function () {
      dateCount1 -= 7;
      writeDate1();
      year1.innerHTML = monday1.giveMeDate(getMyWeek1(dateCount1)).dateYear;
      month1.innerHTML =
          monthArr1[monday1.giveMeDate(getMyWeek1(dateCount1)).dateMonth];
  });

  nextBtn1.addEventListener("click", function () {
      dateCount1 += 7;
      writeDate1();
      year1.innerHTML = monday1.giveMeDate(getMyWeek1(dateCount1)).dateYear;
      month1.innerHTML =
          monthArr1[monday1.giveMeDate(getMyWeek1(dateCount1)).dateMonth];
  });