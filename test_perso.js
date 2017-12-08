function next1() {
        document.getElementById("q1").style.display = "none";
        document.getElementById("q2").style.display = "block";
        document.getElementById("step1").style.background = "white";
        document.getElementById("step1").style.color = "black";
        document.getElementById("step2").style.background = "#008CBA";
        document.getElementById("step2").style.color = "white";
    }

function next2() {
        document.getElementById("q2").style.display = "none";
        document.getElementById("q3").style.display = "block";
        document.getElementById("step2").style.background = "white";
        document.getElementById("step2").style.color = "black";
        document.getElementById("step3").style.background = "#008CBA";
        document.getElementById("step3").style.color = "white";
    }

function next3() {
        document.getElementById("q3").style.display = "none";
        document.getElementById("q4").style.display = "block";
        document.getElementById("step3").style.background = "white";
        document.getElementById("step3").style.color = "black";
        document.getElementById("step4").style.background = "#008CBA";
        document.getElementById("step4").style.color = "white";
    }

function next4() {
        document.getElementById("q4").style.display = "none";
        document.getElementById("q5").style.display = "block";
        document.getElementById("step4").style.background = "white";
        document.getElementById("step4").style.color = "black";
        document.getElementById("step5").style.background = "#008CBA";
        document.getElementById("step5").style.color = "white";
    }

function prev2() {
        document.getElementById("q2").style.display = "none";
        document.getElementById("q1").style.display = "block";
        document.getElementById("step2").style.background = "white";
        document.getElementById("step2").style.color = "black";
        document.getElementById("step1").style.background = "#008CBA";
        document.getElementById("step1").style.color = "white";
    }

function prev3() {
        document.getElementById("q3").style.display = "none";
        document.getElementById("q2").style.display = "block";
        document.getElementById("step3").style.background = "white";
        document.getElementById("step3").style.color = "black";
        document.getElementById("step2").style.background = "#008CBA";
        document.getElementById("step2").style.color = "white";
    }

function prev4() {
        document.getElementById("q4").style.display = "none";
        document.getElementById("q3").style.display = "block";
        document.getElementById("step4").style.background = "white";
        document.getElementById("step4").style.color = "black";
        document.getElementById("step3").style.background = "#008CBA";
        document.getElementById("step3").style.color = "white";
    }

function prev5() {
        document.getElementById("q5").style.display = "none";
        document.getElementById("q4").style.display = "block";
        document.getElementById("step5").style.background = "white";
        document.getElementById("step5").style.color = "black";
        document.getElementById("step4").style.background = "#008CBA";
        document.getElementById("step4").style.color = "white";
    }


function q1() {
    var firstName = document.getElementsByClassName("answer_txt")[0].value;
    var lastName = document.getElementsByClassName("answer_txt")[0].value;
    }

function q2() {
    var drink = [];
    var score_q2 = 0;
    var a = document.getElementsByName("drink");
    for (i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            drink.push(a[i].value)
            }
        } console.log(drink);
        for (var x = 0; x < drink.length; i++)  {
            if (drink[i] == "beer"){
                score_q2 = score_q2 + 4}
            if (drink[i] == "wine"){
                score_q2 = score_q2 + 2}
            if (drink[i] == "water"){
                score_q2 = score_q2 + 10}
            if (drink[i] == "Cola"){
                score_q2 = score_q2 + 6}
            }
            console.log(score_q2);
    }


