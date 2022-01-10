export const keyCheck = (e: any) => {
  const key = e.key
  let flag = false;
  const checkKey = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  checkKey.map((value, index) => {
    if (value === String(key)) {
      return flag = true;
    }
  })
  if (flag) {
    console.log(key)
  }
}
