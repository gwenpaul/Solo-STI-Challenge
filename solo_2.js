var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];


var Employee = function(employName, employNum, employSalary, employReview) {
  this.employName = employName;
  this.employNum = employNum;
  this.employSalary = parseInt(employSalary);
};


var employee1 = new Employee('Atticus', '2405', '47000', 3);
var employee2 = new Employee('Jem', '62347', '63500', 4);
var employee3 = new Employee('Boo', '11435', '54000', 3);
var employee4 = new Employee('Scout', '6243', '74750', 5);



var employees = [employee1, employee2, employee3, employee4];


var calcSTI = function(employee) {
  var bonusPercent;
  if (employee.employReview === 2) {
    bonusPercent = 0;
  } else if (employee.employReview === 3) {
    bonusPercent = 4;
  } else if (employee.employReview === 5) {
    bonusPercent = 10;
  } else if (employee.employNum.length === 4) {
    bonusPercent += 5;
  } else if (employee.employSalary > 65000) {
    bonusPercent -= 1;
  } else if (bonusPercent > 13) {
    bonusPercent = 13;
  };

  var sti = {
    name: employee.employName,
    sti: bonusPercent,
    totalcomp: employee.employSalary + Math.round(employee.employSalary * bonusPercent / 100), //math.round to round the value of employSalary * bonusPercent/100(to make decimal)
    totalbonus: Math.round(employee.employSalary * bonusPercent / 100)
  }
  return sti;
}

for (var i = 0; i < employees.length; i++) {
  console.log(calcSTI(employees[i]));
