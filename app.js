$(document).ready(function(){
    let menu = $('.bx-grid-alt');
    let nav_menu = $('nav-menu');
    menu.click(function(){
        nav_menu.toggleClass('.burger');
        // console.log('hello')
    })
})