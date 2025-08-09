<template>
  <div id="topmenu" style="width: 100%; height: 40px">
    <table border="0" width="100%">
      <thead>
      <tr>
        <td width="25%">&nbsp;</td>
        <td width="50%" align="center">
          <AppLink to="Blog">Blog</AppLink>
          &ensp;&ensp;
          <AppLink to="FamilyHistory">Family History</AppLink>
          &ensp;&ensp;
          <!-- <a href="Blog.html" title="Blog Page.">Our Blog</a>&ensp;&ensp; -->
          <AppLink to="/">Family Tree</AppLink>
          <!-- <a
            href="http://freepages.family.rootsweb.ancestry.com/~falkman/"
            title="Family Tree."
            >Family Tree</a
          > -->
          &ensp;&ensp;
          <AppLink to="PhotoPages">Photo Pages</AppLink>
          &ensp;&ensp;
          <AppLink to="Links">Links</AppLink>
        </td>
        <th width="25%" align="right">
          <div id="clockbox" style="text-align: center">{{ clockText }}</div>
        </th>
      </tr>
      </thead>
    </table>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  var clockText = ref("");
  // import { GetClock } from "../assets/js/getClock.js";
  // var myInterval = setInterval(GetClock, 1000);
  // clockText.value = GetClock();
  var tday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

    clockText.value =
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
    // $("#lockbox").innerHTML = clocktext;
  }
  // GetClock();
  var myInterval = setInterval(GetClock, 1000);
</script>
