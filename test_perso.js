function next1() {
        var a = document.getElementsByClassName("answer_txt");
        while (a[0].value == "" || a[1].value == ""){
            a[0].focus();
            a[0].value = "Can not be empty";
            a[1].focus();
            a[1].value = "Can not be empty";
        }
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
    var lastName = document.getElementsByClassName("answer_txt")[1].value;
    }

function q2() {
    var score_q2 = parseInt(0);
    var a = document.getElementsByName("drink");
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            score_q2 = score_q2 + parseInt(a[i].value)}
        }
        return score_q2;
    }

function q3() {
    var score_q3 = parseInt(0);
    var c = document.getElementsByName("coffee");
    for (var i = 0; i < c.length; i++) {
        if (c[i].checked == true) {
             score_q3 = parseInt(c[i].value)}
    }
        return score_q3
    }

function q4() {
    var score_q4 = parseInt(0);
    var d = document.getElementsByClassName("buttonAnswer");
    for (var i = 0; i < d.length;i++){
        if (d[i].focused == true){
            score_q4 = d[i].value}
        }
        return score_q4
    }


function q5() {
    var score_q5 = parseInt(0);
    var d = document.getElementById("dropdown");
    score_q5 = parseInt(d.value);
    return score_q5;
    }

    function submit() {
    var total = parseInt(q2() + q3() + q4() + q5());
    return total;
    }