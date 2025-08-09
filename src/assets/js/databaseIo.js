var clockText = '';


//get product by id
async function getProductById() {
  try {
    const response = await axios.get(
      `http://localhost:5001/products/${this.$route.params.id}`
    );
    this.recordInfo = response.data;
    // build new Array of Objects (with key/value pairs)
    for (const [key, value] of Object.entries(this.recordInfo)) {
      this.recordArray.push({ key, value });
      console.log({ key, value });
    }
    this.recordArray.shift(); // remove 'id' field
    console.log(this.recordArray);
  } catch (err) {
    console.log(err);
  }
};

//update product by id
async function updateProduct(recordArray) {
  for (var i = 0; i < recordArray.length; i++) {
    dbData[recordArray[i].key] = recordArray[i].value;
  }
  console.log(dbData);
  try {
    await axios.put(
      `http://localhost:5001/products/${this.$route.params.id}`,
      dbData
    );
    this.$router.push("/InfoTable");
  } catch (err) {
    console.log(err);
  }
};



// function GetClock() {
//   var d = new Date();
//   var nday = d.getDay(),
//     nmonth = d.getMonth(),
//     ndate = d.getDate();
//   var nhour = d.getHours(),
//     nmin = d.getMinutes(),
//     nsec = d.getSeconds();
//   if (nmin <= 9) nmin = "0" + nmin;
//   if (nsec <= 9) nsec = "0" + nsec;

//   clockText =
//     "" +
//     tday[nday] +
//     ", " +
//     tmonth[nmonth] +
//     " " +
//     ndate +
//     " " +
//     nhour +
//     ":" +
//     nmin +
//     ":" +
//     nsec +
//     "";
  
//   return clockText;
// }
// theTime = GetClock();
// // var myInterval = setInterval(GetClock, 1000);


export default { getProductById, updateProduct }
