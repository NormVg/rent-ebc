<script setup >

const db = ref()
const updateHistoryDB = async () =>{
  const {data} = await useFetch("/api/alldata")
  db.value = ((data.value).sort((a,b)=> a.seq-b.seq))
}
onMounted(async ()=>{
  await  updateHistoryDB()
})
</script>

<template>
  <div id="main-box">

    <NewForm :historyDB="db" :updateDB="updateHistoryDB"/>
    <HistoryTable :historydb="db" />
  </div>
</template>
<style >


#main-box{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
}


</style>