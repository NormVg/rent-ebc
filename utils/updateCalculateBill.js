export default async function (mm, motor, slave, bill, dataTable) {
    const a = dataTable;
    var b = a.length;
    const c = a[1];
    console.log(a,c,"-from-cal_bill-upate")
    
    mm = parseFloat(mm) - parseFloat(c["main-meter"]);
    motor = parseFloat(motor) - parseFloat(c["motor"]);
    slave = parseFloat(slave) - parseFloat(c["slave"]);
  
    const each_motor = motor / 2;
  
    const one = mm - slave - each_motor;
    const ground = Math.floor((one / mm) * bill);
    const first = bill - ground;
  b = b-1
    return {b , ground, first };
  }