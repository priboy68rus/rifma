rifm_input = document.getElementById('rifm_input');
rifm_output = document.getElementById('rifm_output');
btn = document.getElementById("rifm_button");


document.onload = function () {
    rifm_output.value = "";
}

function include(arr, obj) {
    for(var i=0; i<arr.length; i++) {
        if (arr[i] == obj) return true;
    }
    return false;
}

function remove_whitespace(str) {
    for(var i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            str = str.slice(1, str.length);
        }
    }
    return str;
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

var vowels = ["у", "е", "ы", "а", "о", "э", "я", "и", "ю", "ё"];
var d = {"а": "я", "э" : "е", "о": "ё", "у" : "ю"};
var core = 'хуй';
var str1 = '';

var rifm = function() {
    if (rifm_input.value.search('ху') == 1) return;
    str1 = rifm_input.value;
    str1 = remove_whitespace(str1);
    while (include(vowels, str1[0]) == false) {
        str1 = str1.slice(1, str1.length);
    }

    console.log(str1);
    if (str1[0] == 'и') {
        var str2 = core.slice(0, 2) + str1;
    } else if (include(Object.keys(d), str1[0]) == true) {
        var str2 = core.slice(0, 2) + str1.replaceAt(0, d[str1[0]]);
    } else if (include(Object.keys(d).map(k => d[k]), str1[0]) == true) {
        var str2 = core.slice(0, 2) + str1;
    } else {
        var str2 = core + str1;
    }


    //str1 = core + str1;




    rifm_output.value = str2;

};

btn.onclick = rifm;
