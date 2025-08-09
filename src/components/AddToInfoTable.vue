<script>
  //import axios
  import axios from "axios";
  import { ref } from "vue";
  const dbData = {};
  export default {
    data() {
      return {
        productName: "",
        productPrice: "",
        recordArray: ref([]),
      };
    },
    created: function () {
      this.getProducts();
    },

    methods: {
      //get all products
      async getProducts() {
        try {
          const response = await axios.get("http://localhost:5001/products");
          this.recordInfo = response.data[0];
          for (const [key, value] of Object.entries(this.recordInfo)) {
            this.recordArray.push({ key });
            // console.log({ key });
          }
          this.recordArray.shift(); // remove 'id' field
          // console.log(this.recordArray);
        } catch (err) {
          console.log(err);
        }
      },
      //create new product
      async saveProduct() {
        for (var i = 0; i < this.recordArray.length; i++) {
          dbData[this.recordArray[i].key] = this.recordArray[i].value;
        }
        console.log(dbData);
        try {
          await axios.post("http://localhost:5001/products", dbData);
          (this.productname = ""), (this.productPrice = "");
          this.$router.push("/");
        } catch (err) {
          console.log(err);
        }
      },
      cancel() {
        this.$router.push("/InfoTable");
      },
    },
  };
</script>

<template>
  <div v-for="(value, key) in recordArray" :key="key">
    <div class="field" v-if="value.key != 'password' && value.key != 'username'">
      <label class="label">{{ value.key }}</label>
      <div class="control">
        <input class="input" type="text" placeholder="---" v-model="value.value" />
      </div>
    </div>
  </div>
  <div class="control">
    <button class="button is-info is-small" @click="saveProduct" disabled>SAVE</button>
    <button class="button is-danger is-small" @click="cancel">CANCEL</button>
  </div>
</template>

<style>
  .button {
    margin: 10px;
  }
</style>
