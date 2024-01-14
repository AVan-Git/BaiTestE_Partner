let soLuongArr = 5;
let a = Math.floor(Math.random() * soLuongArr) + 1;

const addData = (gtri1, soMang) => {
  let arrNew = [];
  for (let i = 1; i <= soMang; i++) {
    arrNew.push([gtri1] + i);
  }
  return arrNew;
};

let arrA = addData("A", 5);
let arrB = addData("B", 4);
let arrC = addData("C", 7);
let arrD = addData("D", 5);
let arrE = addData("E", 5);
console.log("🚀 ~ arrA:", arrA);
console.log("🚀 ~ arrB:", arrB);
console.log("🚀 ~ arrC:", arrC);
console.log("🚀 ~ arrD:", arrD);
console.log("🚀 ~ arrE:", arrE);

//
let arr_toHop = [];
for (let i = 0; i < arrA.length; i++) {
  let val_a = arrA[i];
  //
  for (let i = 0; i < arrB.length; i++) {
    let val_b = arrB[i];
    //
    for (let i = 0; i < arrC.length; i++) {
      let val_c = arrC[i];
      //
      for (let i = 0; i < arrD.length; i++) {
        let val_d = arrD[i];
        //
        for (let i = 0; i < arrE.length; i++) {
          let val_e = arrE[i];

          let arr_z = [val_a, val_b, val_c, val_d, val_e];
          arr_toHop.push(arr_z);
        }
      }
    }
  }
}

console.log("Danh sách các tổ hợp: ", arr_toHop);
