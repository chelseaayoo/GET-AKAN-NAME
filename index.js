var century, year, month, dayOfMonth, dayOfWeek, day;

//Get input
function getInput(){
  century=parseInt(document.getElementById("century").value);
  year=parseInt(document.getElementById("year").value);
  month=parseInt(document.getElementById("month").value);
  dayOfMonth=parseInt(document.getElementById("monthday").value);

  if(century == ""){
    alert("Please enter the correct century");
    return false;
  }else if (year == ""){
    alert("Please enter the correct year");
    return false;
  }else if (month == ""){
    alert("Please enter the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("Please enter the correct date");
    return false;
  }else if (month == "2" && dayOfMonth >= "30"){
      alert("Day must not be greater than or equal to 30 because you were born in February")
  }
}

function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}


 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");
}

let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];


//get selected radio button
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("pass");//Test the radio buttons
  }

    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "You were born on a Sunday." + "  " + "Your akan name is " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "You were born on a Monday." + " " + "Your akan name is " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "You were born on a Tuesday." + " " + "Your akan name is " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "You were born on a Wednesday." + " " + "Your akan name is "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "You were born on a Thursday." + " " + "Your akan name is " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "You were born on a Friday." + " " + "Your akan name is " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "You were born on a Saturday." + " " + "Your akan name is " + maleNames[6];
                break;
                default:

              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "You were born on a Sunday." + "  " + "Your akan name is  akosua";
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "You were born on a Monday." + " " + "Your akan name is adwoa ";
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "You were born on a Tuesday." + " " + "Your akan name is abenaa";
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "You were born on a Wednesday." + " " + "Your akan name is akua";
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "You were born on a Thursday." + " " + "Your akan name is yaa";
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "You were born on a Friday." + " " + "Your akan name is afua";
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "You were born on a Saturday." + " " + "Your akan name is ama";
                  break;

              }
        break
        default:
        console.log("pass");
    }
}