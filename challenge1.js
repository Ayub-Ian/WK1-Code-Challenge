function getGrade() {
    //get user input of marks
    let marks = document.getElementById("marks").value;

    let grade;
  
    //ensure marks is between 0 and 100
    if (marks >= 0 && marks <= 100) {
      if (marks > 79) {
        grade = "A";
      } else if (marks <= 79 && marks >= 60) {
        grade = "B";
      } else if (marks <= 59 && marks > 49) {
        grade = "C";
      } else if (marks <= 49 && marks >= 40) {
        grade = "D";
      } else if (marks < 40) grade = "E";
      
      //output to webpage
      document.getElementById("grade").innerHTML = grade;
    } else {
      document.getElementById("grade").innerHTML =
        "Input should be between 0 and 100";
    }
  }
  