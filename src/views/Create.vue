<template>
  <div>
    <AddToInfoTable />
  </div>
</template>

<script>
  // @ is an alias to /src
  import AddToInfoTable from "@/components/AddToInfoTable.vue";

  export default {
    name: "Create",
    components: {
      AddToInfoTable,
    },
  };
</script>
