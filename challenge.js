const towerOfHanoi = (n, source, auxiliary, target, workbook = '') => {
  if (n === 1) {
    //console.log(`Move disk 1 from source ${source} to target ${target}`);
    return `${source}->${target}\n`;
  }
  workbook += towerOfHanoi(n - 1, source, target, auxiliary, workbook);
  // console.log(`Move disk ${n} from source ${source} to target ${target}`);
  workbook += `${source}->${target}\n`
  workbook += towerOfHanoi(n - 1, auxiliary, source, target, workbook);
  return workbook;
}


const hanoi_steps = (numberOfDiscs) => {
  // write your code here
  return towerOfHanoi(numberOfDiscs, '1', '2', '3')
}

module.exports = hanoi_steps;

//console.log(hanoi_steps(2))
// => 1->2 
//    1->3 
//    2->3

//console.log(hanoi_steps(3))
// => 1->3 
//    1->2
//    3->2
//    1->3
//    2->1
//    2->3
//    1->3

//console.log(hanoi_steps(4))
// => 1->2
//    1->3
//    2->3
//    1->2
//    3->1
//    3->2
//    1->2
//    1->3
//    2->3
//    2->1
//    3->1
//    2->3
//    1->2
//    1->3
//    2->3

