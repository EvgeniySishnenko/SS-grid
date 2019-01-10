const jquery = require("jquery");
const menuPopup = require('./common/menuPopup');
const header = require('./common/header');
const slider = require('./common/slider');
const popupProduct = require('./common/popupProduct');
const showBlockReg = require('./common/showBlockReg');
const showBlockForgot = require('./common/showBlockForgot');
const profileShowInp = require('./common/profileShowInp');
const confirmCartShow = require('./common/confirmCartShow');

if (document.querySelector('.header')) {
    menuPopup();
    header();
}
if (document.querySelector('.slider')) {
    slider();
}
if (document.querySelector('.block__products__grid')) {
    popupProduct();
}
if (document.querySelector('.block__account')) {
    showBlockReg();
    showBlockForgot();
}
if (document.querySelector('.profile')) {
    profileShowInp();
}

if (document.querySelector('.confirm-right')) {
    confirmCartShow();
}


