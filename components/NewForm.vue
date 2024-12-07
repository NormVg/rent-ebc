<template>
  <div id="form-box">
    <h2 id="date-today">{{ TodayDate }}</h2>

    <div class="lable">Main Meter</div>
    <InputText type="number" v-model="MainMeter" />
    <div class="lable">Moter Meter</div>
    <InputText type="number" v-model="MoterMeter" />
    <div class="lable">Slave Meter</div>
    <InputText type="number" v-model="SlaveMeter" />
    <div class="lable">Main Bill</div>
    <InputText type="number" v-model="MainMeterBill" />
    <br />
    <Button @click="submitForm" label="Submit" />
    <br />
  </div>
</template>

<script setup>
const props = defineProps({
  historyDB: {
    type: Object,
    default: [],
  },
  updateDB: {
    type: Function,
  },
});
import { ref } from "vue";

const MainMeter = ref();
const MoterMeter = ref();
const SlaveMeter = ref();
const MainMeterBill = ref();
const formData = ref();
const TodayDate = ref();
const dataTable = ref([]);
const response = ref();

dataTable.value = props.historyDB;
console.log(dataTable.value, "asdasd");

const dateCon = new Date();

TodayDate.value = `${dateCon.getDate()}/${
  dateCon.getMonth() + 1
}/${dateCon.getFullYear()}`;

const isUpdateDoc = () => {
  const a = dataTable.value;
  
  const c = a[0];
  console.log(TodayDate.value, c.date);
  if (TodayDate.value === c.date) {
    return true;
  } else {
    return false;
  }
};

watch(props.historyDB, () => {
  dataTable.value = props.historyDB;
  console.log(dataTable.value, props.historyDB, "___asdas___");
});

const submitForm = async () => {
  dataTable.value = props.historyDB;

  console.log(isUpdateDoc(), "_x-x-x-x");

  if (isUpdateDoc() === false) {
    const bill = await calculateBill(
      MainMeter.value,
      MoterMeter.value,
      SlaveMeter.value,
      MainMeterBill.value,
      dataTable.value
    );

    formData.value = {
      seq: Number(bill.b),
      date: TodayDate.value,
      "main-meter": Number(MainMeter.value),
      motor: Number(MoterMeter.value),
      slave: Number(SlaveMeter.value),
      "bill-rs": Number(MainMeterBill.value),
      "bill-ground": Number(bill.ground),
      "bill-first": Number(bill.first),
    };

    try {
      const { data } = await useFetch("/api/add", {
        method: "POST",
        body: formData.value,
      });
      response.value = data.value;
      console.log(data.value, "<--res-->");
    } catch (error) {
      response.value = { success: false, message: error.message };
    }
    console.log(bill);
  } else {
   
    const bill = await updateCalculateBill(
      MainMeter.value,
      MoterMeter.value,
      SlaveMeter.value,
      MainMeterBill.value,
      dataTable.value
    );

    formData.value = {
      seq: Number(bill.b),
      date: TodayDate.value,
      "main-meter": Number(MainMeter.value),
      motor: Number(MoterMeter.value),
      slave: Number(SlaveMeter.value),
      "bill-rs": Number(MainMeterBill.value),
      "bill-ground": Number(bill.ground),
      "bill-first": Number(bill.first),
    };

    console.log(formData.value,"+as=as=das=d=a")

    try {
      const { data } = await useFetch("/api/update?seq="+formData.value.seq, {
        method: "POST",
        body: formData.value,
      });
      response.value = data.value;
      console.log(data.value, "<--res-->");
    } catch (error) {
      response.value = { success: false, message: error.message };
    }

    
    
  }
  MainMeter.value = null;
  MoterMeter.value = null;
  SlaveMeter.value = null;
  MainMeterBill.value = null;
  await props.updateDB();
};
</script>


<style scoped>
#date-today {
  color: #848484;
}
.lable {
  color: #91f38f;
}
#form-box {
  /* border:  1px solid red; */

  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;

  background-color: #00000062;
  border: 1px whitesmoke solid;
  border-radius: 15px;
  width: 30vw;
  padding: 10px 40px;
  margin-top: 8vh;
  margin-bottom: 15vh;
  padding-bottom: 10px;
  gap: 10px;
}
</style>





<!-- 
main-meter 21379

motor 2392

slave 5236
bill-rs 2774
bill-ground 1927

bill-first 847 -->
