let lessons = [
    {
        //"name": "Закон на Кулон",
        "elements": ["k", "q1", "q2", "r"],
        "formula": "textbox0 * ((textbox1 * textbox2) / Math.pow(textbox3, 2))"
    },
    {
        //"name": "Интензитет",
        "elements": ["F", "q0"],
        "formula": "textbox0 / textbox1"
    },
    {
        //"name": "Интензитет чрез напрежение",
        "elements": ["U", "l"],
        "formula": "textbox0 / textbox1"
    },
    {
        //"name": "Потенциал",
        "elements": ["W", "q"],
        "equasion":  "textbox0 / textbox1"
    },
    {
        //"name": "Напрежение чрез интензитет",
        "elements": ["E", "l"],
        "formula": "textbox0 / textbox1"
    },
    {
        //"name": "Напрежение чрез потенциал",
        "elements": ["ф1", "ф2"],
        "formula": "textbox0 - textbox1"
    },
    {
        //"name": "Работа",
        "elements": ["q", "U"],
        "formula":  "textbox0 * textbox1"
    },
    {
        //"name": "Капацитет на кондензатор",
        "elements": ["q","U"],
        "formula": "textbox0 / textbox1"
    },
    {
        //"name": "Магнитна индукция",
        "elements": ["Fmax","q0","V"],
        "formula": "textbox0 / (textbox1*textbox2)"
    },
    {
        //"name": "Закон на Ампер",
        "elements": ["I","l","B"],
        "formula": "textbox0 * textbox1 * textbox2"
    },
    {
        //"name": "Ефективна стойност на ток",
        "elements": ["Imax"],
        "formula": "textbox0 / 1.41421356237"
    },
    {
        //"name": "Ефективна стойност на напрежение",
        "elements": ["Umax"],
        "formula": "textbox0 / 1.41421356237"
    },
    {
        //"name": "Закон на Ом (ефективни стойности)",
        "elements": ["R", "Ieff"],
        "formula": "textbox0 * textbox1"
    },
    {
        //"name": "Закон на Джаул-Ленц (ефективни стойности)",
        "elements": ["Ieff", "R", "t"],
        "formula": "textbox0 * textbox0 * textbox1 * textbox2"
    },
    {
        //"name": "Работа (ефективни стойности)",
        "elements": ["Ueff", "R", "t"],
        "formula": "(textbox0 * textbox0 / textbox1) * t"
    },
    {
        //"name": "Мощност (ефективни стойности)",
        "elements": ["Ueff", "R"],
        "formula": "(textbox0 * textbox0 / textbox1)"
    },
];

$(function(){
    for(let i = 0; i < 5; i++){
        $("#textbox"+i).attr('placeholder', "Въведи")
        $("#calcDropdown").on('refresh', calcDropdown.value = "")
    }

    function Calculate(){
        let textbox0 = Number($("#textbox0").val());
        let textbox1 = Number($("#textbox1").val());
        let textbox2 = Number($("#textbox2").val()); 
        let textbox3 = Number($("#textbox3").val());
        
        for (let i = 0; i < lessons.length; i++){
            if (calcDropdown.value == i){
                alert(eval(lessons[i].formula)); break;
            }
        }
    }

    let currentLesson = 0;

    function HideAndPlaceholder(){
        for (let i = 0; i < lessons[currentLesson].elements.length; i++){
            $("#textbox"+i).show();
            $("#textbox"+i).attr('placeholder', lessons[currentLesson].elements[i]);
        }
        for(let j = lessons[currentLesson].elements.length; j <= 3; j++){
            $("#textbox" + j).hide();
        }
    }

    $("#calcDropdown").on('change', function(){$("#nonSelectable").hide()});
    $("#calcSubmit").on('click', function() {Calculate()});
    $("#calcDropdown").on('change',function(){currentLesson = calcDropdown.value, HideAndPlaceholder()});
});