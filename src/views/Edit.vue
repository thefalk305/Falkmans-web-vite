<template>
  <div>
    <EditInfoTable />
  </div>
</template>

<script>
  // @ is an alias to /src
  import EditInfoTable from "@/components/EditInfoTable.vue";

  export default {
    name: "Edit",
    components: {
      EditInfoTable,
    },
  };
</script>
