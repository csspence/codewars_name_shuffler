/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/

const nameShuffler = (str) => {
  let arr = str.split(' ');
  return arr[1] + ' ' + arr[0];
}