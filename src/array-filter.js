export function evensOnly(arr) {
  return arr.filter(n => n % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr){
  return arr.filter(s => s.length <= 5);
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(o => o.member);
}

export function ofAge(arr){
  return arr.filter(o => o.age > 18);
}