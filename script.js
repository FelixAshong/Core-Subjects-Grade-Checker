function showResult(){
    // get all element
    var english = document.querySelector("#engl").value;
    var social = document.querySelector("#soc").value;
    var science = document.querySelector("#sci").value;
    var maths = document.querySelector("#mth").value;
    var total = parseInt(english) + parseInt(social) + parseInt(science) + parseInt(maths);
    var inputIndex = document.querySelector(".inp").value;

    // gradeChacker
    var englishGrade = gradeChacker(english);
    var socialGrade = gradeChacker(social);
    var scienceGrade = gradeChacker(science);
    var mathsGrade = gradeChacker(maths);
    var avGrade = total/4;

    // set value to HTML
    if (inputIndex != 0){
        document.querySelector("#avgResult").innerHTML = avGrade;
        document.querySelector("#totalNumberResult").innerHTML = total;
        document.querySelector("#gradeResult").innerHTML = " English:" + english + " <br>  Grade: " + englishGrade  + "</br> Social Studies: " + social + "<br>  Grade: " + socialGrade + "<br> Science: " + science + "<br>  Grade : "  + scienceGrade + "<br> Maths: " + maths + "<br>  Grade: " + mathsGrade ;
    }else{
        alert("you don't give any value yet !");
    }
}

// gradeChacker function
function gradeChacker(number){
    if(number<=100 && number>=0){
        if(number<=100 && number>=80){
            return "A1";
        }if (number<80 && number>=70){
            return "B2";
        }if (number <70 && number>=65){
            return "B3";
        }if(number <65 && number >=60){
            return "C4";
        }if(number <60 && number>=55){
            return "C5";
        }if(number <55 && number >=50){
            return "C6";
        }if(number <50 && number >=45){
            return "D7";
        }if(number <45 && number >=40){
            return "E8";
        }else{
            return "F9";
        }
    }else{
        return "please, give correct value";
    }
}