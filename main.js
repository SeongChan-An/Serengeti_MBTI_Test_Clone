let currNum = 1;
let objQuestion= {
    1: {"title" : "문제 1번", "type": "EI", "A": "E", "B": "I"},
    2: {"title" : "문제 2번", "type": "EI", "A": "E", "B": "I"},
    3: {"title" : "문제 3번", "type": "EI", "A": "E", "B": "I"},
    4: {"title" : "문제 4번", "type": "SN", "A": "S", "B": "N"},
    5: {"title" : "문제 5번", "type": "SN", "A": "S", "B": "N"},
    6: {"title" : "문제 6번", "type": "SN", "A": "S", "B": "N"},
    7: {"title" : "문제 7번", "type": "TF", "A": "T", "B": "F"},
    8: {"title" : "문제 8번", "type": "TF", "A": "T", "B": "F"},
    9: {"title" : "문제 9번", "type": "TF", "A": "T", "B": "F"},
    10: {"title" : "문제 10번", "type": "JP", "A": "J", "B": "P"},
    11: {"title" : "문제 11번", "type": "JP", "A": "J", "B": "P"},
    12: {"title" : "문제 12번", "type": "JP", "A": "J", "B": "P"}
}

let resultInfo = {
    "ISTJ": {"animal": "하마", "explain": "하마는 ...", "img": "lion.jpg"},
    "ENFP": {"animal": "멋쟁이사자", "explain": "멋쟁이사자 ...", "img": "lion.jpg"},
    "ENTJ": {"animal": "호랑이", "explain": "호랑이 ...", "img": "lion.jpg"},
}

const btnStart = document.querySelector(".btn");

btnStart.addEventListener("click", () => {
    console.log("Clicked")
    $(".start").hide();
    $(".question").show();
    nextQuestion();    
});

// function start() {
//     console.log("Clicked")
//     $(".start").hide();
//     $(".question").show();
//     nextQuestion();
// }

$("#A").click(function() {
    console.log($("#type").val());
    let type = $("#type").val();
    let prevValue = $("#" + type).val();
    $("#" + type).val(parseInt(prevValue) +1);
    console.log(`clicked : ${objQuestion[currNum]["A"]}`);
    nextQuestion();
});
$("#B").click(function() {
    console.log(`clicked : ${objQuestion[currNum]["B"]}`);
    nextQuestion();
});

function nextQuestion() {
    if (currNum == 13) {
        $(".question").hide();
        $(".result").show();
        let resultMBTI = "";
        ($("#EI").val() < 2)  ? resultMBTI += "I" : resultMBTI += "E";
        ($("#SN").val() < 2)  ? resultMBTI += "S" : resultMBTI += "N";
        ($("#TF").val() < 2)  ? resultMBTI += "T" : resultMBTI += "F";
        ($("#JP").val() < 2)  ? resultMBTI += "J" : resultMBTI += "P";
        console.log(resultMBTI);

        $("#img").attr("src", resultInfo[resultMBTI]["img"]);
        $("#animal").html(resultInfo[resultMBTI]["animal"]);
        $("#explain").html(resultInfo[resultMBTI]["explain"]);
    } else {
        console.log("Num : ", currNum);
        $(".progress-bar").attr("style", "width: calc(100/12*"+ currNum + "%");
        $("#title").html(objQuestion[currNum]["title"]);
        $("#type").val(objQuestion[currNum]["type"]);
        $("#A").html(objQuestion[currNum]["A"]);
        $("#B").html(objQuestion[currNum]["B"]);
        currNum++
    }
}