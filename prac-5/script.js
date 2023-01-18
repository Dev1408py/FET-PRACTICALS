function check_prft(nm) {
    let sm = 0;
    for (let i = 1; i <= (nm / 2); i++) {
      if (nm % i == 0) {
        sm += i;
      }
    }
    if (nm == sm) {
      return true;
    }
    return false;
  }
  function check() {
    let n = document.getElementById("numb").value;
    let ans = 0;
    for (let i = n; i < 100000; i++) {
      if (check_prft(i)) {
        ans = i;
        break;
      }
    }
    document.getElementById("ans1").innerHTML = `The perfect number greater than ${n} = ${ans}`;
  }
  function prac5_2() {
    const employees = [
      { name: "Dev patel", workingDays: 30 },
      { name: "Dhrit patel", workingDays: 27 },
      { name: "Ridham patel", workingDays: 24 },
      { name: "Prachal patel", workingDays: 17 },
      { name: "Rushil patel", workingDays: 26 },
      { name: "Tanishq patel", workingDays: 22 }
    ];
    let baseSalary = 1000;
    let ans = "";
    employees.forEach(employee => {
      let salary = baseSalary * employee.workingDays;
      ans += `The salary of ${employees.name} = ${salary}<br>`;
    });
    document.getElementById("ans2").innerHTML = ans;
  }