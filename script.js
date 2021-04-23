$(document).ready(function () {
    $("button").on("click", calculate);

    $('input').change(function() {
        if ($("input#weight").val() < 88)
            $("input#weight").val(88);
        if ($("input#weight").val() > 353)
            $('input#weight').val(353);
        if ($("input#height").val() < 59)
            $("input#height").val(59);
        if ($("input#height").val() > 79)
            $('input#height').val(79);
    });
});

function calculate() {

    //set weight and height
    let weight = $("input#weight").val();
    let height = $("input#height").val();
    //calculate bmi
    let bmi = ((weight / (height * height)) * 703).toFixed(1);

    //initialize range
    let range = "";

    //set the range depending on where the bmi lands
    if (bmi < 18.5) {
        range = "underweight"
    }
    if (bmi >= 18.5 && bmi < 25) {
        range = "normal weight"
    }
    if (bmi >= 25 && bmi <= 30) {
        range = "overweight"
    }
    if (bmi > 30) {
        range = "obese"
    }

    //set the output
    $("p#output").text('You are ' + range);

}