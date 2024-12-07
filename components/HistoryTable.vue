<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    historydb :{
      type:Object,
      default:[]
    }
})
const db  = computed(()=>{
  const data = props.historydb.reverse()

  
  return data
  
})




</script>

<template>
  <div id="tables">
    <table>
      <thead>
        
        <tr>
          <th>Date</th>
          <th>Main Meter</th>
          <th>Motor</th>
          <th>Slave</th>
          <th>Bill</th>
          <th>Ground</th>
          <th>First</th>
        </tr>
      </thead>
<tbody>

  <tr v-for="tab in db" :key="tab"> 
    <!-- <div>{{tab}}</div> -->
    <td class="c">{{ tab["date"] }}</td>
    <td class="c">{{ tab["main-meter"] }}</td>
    <td class="c">{{ tab["motor"] }}</td>
    <td class="c">{{ tab["slave"] }}</td>
    <td class="c">{{ tab["bill-rs"] }}</td>
    <td class="ground">{{ tab["bill-ground"] }}</td>
    <td class="first">{{ tab["bill-first"] }}</td>
  </tr>
</tbody>
    </table>
  </div>
</template>

<style scoped>


#tables{

  
  
    margin-top: 100px;
    margin-bottom: 100px;
    background-color: #4b4b4b52;
    border: 1px whitesmoke solid;
    border-radius: 15px;
    width: 75vw;
    padding: 10px;
    
    height: 70vh;
    overflow-x: hidden;
    overflow-y: scroll;

    display: flex;
    justify-content:center;
    align-items: flex-start;
    overflow: scroll
}
#tables table th{
    text-align: center;
    padding-bottom: 15px;
}
#tables table td{
    padding: 5px;
    text-align: center;
}
#tables table{
    
    width: 100%;    
    
}

.c{
    color: #88C3EF;
}
.ground{
    color: #E8638B;
}

.first{
    color: #91F38F;
}


#tables::-webkit-scrollbar-track {
    background:transparent;
    
  }

::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background:grey;
    /* border-radius: 10px; */
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #6C9DBA;
    border-radius: 10px;
  }


@media only screen and (max-width: 480px){
    #form-box{
        
        width: 90vw;
    }

    #tables{
        margin-top: 100px;
        margin-bottom: 100px;
        background-color: #00000052;
        border: 1px whitesmoke solid;
        border-radius: 15px;
        width: 90vw;
        padding: 10px;
        
        height: 60vh;
        overflow-x: scroll;
        overflow-y: scroll;
    
        display: flex;
        justify-content:center;
        align-items: flex-start;
    }
    #tables table{
        padding-left: 110px;
    }
    #tables table td{
        padding: 10px;
     
    }
}

</style>


