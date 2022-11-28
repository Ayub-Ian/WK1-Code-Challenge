function calculateTax() {
    let grossPay;
    let nhif;
    let nssf;
    let paye;
    let personalRelief = 2400;
    let insuranceRelief;
    let netSalary;
    let pensionablePay;
    
    //convert input to integer
    let basicSalary = parseInt(document.getElementById("basic").value);
  
    // check if empty string is passed and assigns 0 to variable else convert to integer
    let benefits = document.getElementById("benefits").value === "" ? 0 : parseInt(document.getElementById("benefits").value);
    
  
    // calculate percentage tax(paye)
    if (basicSalary < 24000) {
      paye = 2400;
    } else if (basicSalary >= 24001 && basicSalary <= 32333) {
      paye = Math.round(24000 * 0.1 + (basicSalary - 24001) * 0.25);
    } else if (basicSalary > 32333) {
      paye = Math.round(24000 * 0.1 + 8332 * 0.25 + (basicSalary - 32333) * 0.3);
    }
  
    let totalPaye = paye - personalRelief;
  
    //calculate nhif
    grossPay = basicSalary + benefits;
    if (grossPay >= 1 && grossPay <= 5999) {
      nhif = 150;
    } else if (grossPay >= 6000 && grossPay <= 7999) {
      nhif = 300;
    } else if (grossPay >= 8000 && grossPay <= 11999) {
      nhif = 400;
    } else if (grossPay >= 12000 && grossPay <= 14999) {
      nhif = 500;
    } else if (grossPay >= 15000 && grossPay <= 19999) {
      nhif = 600;
    } else if (grossPay >= 20000 && grossPay <= 24999) {
      nhif = 750;
    } else if (grossPay >= 25000 && grossPay <= 29999) {
      nhif = 850;
    } else if (grossPay >= 30000 && grossPay <= 34999) {
      nhif = 900;
    } else if (grossPay >= 35000 && grossPay <= 39999) {
      nhif = 950;
    } else if (grossPay >= 40000 && grossPay <= 44999) {
      nhif = 1000;
    } else if (grossPay >= 45000 && grossPay <= 49999) {
      nhif = 1100;
    } else if (grossPay >= 50000 && grossPay <= 59999) {
      nhif = 1200;
    } else if (grossPay >= 60000 && grossPay <= 69999) {
      nhif = 1300;
    } else if (grossPay >= 70000 && grossPay <= 79999) {
      nhif = 1400;
    } else if (grossPay >= 80000 && grossPay <= 89999) {
      nhif = 1500;
    } else if (grossPay >= 90000 && grossPay <= 99999) {
      nhif = 1600;
    } else if (grossPay >= 100000) {
      nhif = 1700;
    }
  
     //calculate insurance relief
     insuranceRelief = Math.round(0.15 * nhif);
  
     let totalNhif = nhif - insuranceRelief;
  
    //calculate nssf
    if (basicSalary < 18000) {
      pensionablePay = basicSalary;
    } else if (basicSalary > 18000) {
      pensionablePay = 18000;
    }
    nssf = Math.round(0.06 * pensionablePay);
  
    //calculate net salary
    netSalary = basicSalary - (totalNhif + totalPaye);
  
    //prints out the values 
    //prints the value as currency(with commas)
    document.getElementById("gross").innerHTML = `KES ${grossPay.toLocaleString()}`
    document.getElementById("paye").innerHTML = `KES ${totalPaye.toLocaleString()}`
    document.getElementById("nhif").innerHTML = `KES ${totalNhif.toLocaleString()}`
    document.getElementById("nssf").innerHTML = `KES ${nssf.toLocaleString()}`
    document.getElementById("net").innerHTML = `KES ${netSalary.toLocaleString()}`
  }
  