var clockText = '';
var theTime = '';
var tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var tmonth = [
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
  "December",
];

function GetClock() {
  var d = new Date();
  var nday = d.getDay(),
    nmonth = d.getMonth(),
    ndate = d.getDate();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds();
  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  clockText =
    "" +
    tday[nday] +
    ", " +
    tmonth[nmonth] +
    " " +
    ndate +
    " " +
    nhour +
    ":" +
    nmin +
    ":" +
    nsec +
    "";
  
  return clockText;
}
theTime = GetClock();
// var myInterval = setInterval(GetClock, 1000);


export default { GetClock }
