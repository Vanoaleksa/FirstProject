function sayHi(){
    if (document.querySelector('.search-drop-header-nothidden') ){
        let elem = document.querySelector('.search-drop-header-nothidden');
        let elem_1 = document.querySelector('.fa-search');
        elem.classList.add("search-drop-header");
        elem_1.classList.add("fa-times");
        elem.classList.remove("search-drop-header-nothidden");
        elem_1.classList.remove("fa-search");
    } else {
        let elem = document.querySelector('.search-drop-header');
        let elem_1 = document.querySelector('.fa-times');
        elem.classList.add("search-drop-header-nothidden");
        elem_1.classList.add("fa-search");
        elem.classList.remove("search-drop-header");
        elem_1.classList.remove("fa-times");  
    }
    
}

function menu() {
    if(document.querySelector('.left_column')) {
        let magic = document.querySelector('.left_column');
        let mag = document.querySelector('.div_mob-container-header')
        magic.classList.add('left_column_open');
        mag.classList.add('div_mob-container-header_open');
        magic.classList.remove('left_column');
        mag.classList.remove('div_mob-container-header');
    } else {
        let magic = document.querySelector('.left_column_open');
        let mag = document.querySelector('.div_mob-container-header_open');
        magic.classList.add('left_column');
        mag.classList.add('div_mob-container-header');
        magic.classList.remove('left_column_open');
        mag.classList.remove('div_mob-container-header_open');
    }
    
}