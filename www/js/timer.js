'use strict';

var timer, min, sec;

$(function() {
    $('#start').click(function() {
        $('#message').text('');
        if (set()) {
            timer = setInterval('counter()', 1000);
        }
    });

    $('#reset').click(function(){
        min = 0;
        sec = 0;
        setView();
        clearInterval(timer);
        document.getElementById('sound').pause();
        $('#message').text('');
        $('#minutes-setting').val('0');
        $('#seconds-setting').val('0');
    });
});

function set() {
    // gard
    if (!Number($('#minutes-setting').val()) && !Number($('#seconds-setting').val())) {
        $('#message').text('Please set time!');
        return false;
    }
    // minutes
    if (Number($('#minutes-setting').val())) {
        min = Number($('#minutes-setting').val());
    } else {
        min = 0;
    }
    // seconds
    if (Number($('#seconds-setting').val())) {
        sec = Number($('#seconds-setting').val());
    } else {
        sec = 0;
    }

    setView();
    return true;
}

function setView(){
    $('#minutes').text(convertNum(min, 2));
    $('#seconds').text(convertNum(sec, 2));
}

function convertNum(num, figures) {
    var str = String(num);
    while (str.length < figures) {
        str = "0"+str;
    }
    return str;
}

function counter() {
    if(min === 0 && sec === 0){
        clearInterval(timer);
        document.getElementById('sound').play();
        $('#message').text('終了でーす。');
    }else if(sec === 0){
        sec = 59;
        min--;
    }else{
        sec--;
    }
    setView();
}

function getPath(){
    var str = location.pathname;
    var i = str.lastIndexOf('/');
    return str.substring(0,i+1);
}