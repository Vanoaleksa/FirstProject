function search(){
    let input = document.querySelector('.input-search');
    let titles = document.querySelectorAll('.project-title');

    let stringToFind = input.value.toUpperCase();
    titles.forEach(item => {
        let title = item.textContent;

        if(title.includes(stringToFind)){
            item.closest('.container-section').style.display = 'block';
        } else {
            item.closest('.container-section').style.display = 'none';
        }
      } 
    )
}

function search_left_column() {
    let input = document.querySelector('.input-search_left_column');
    let titles = document.querySelectorAll('.project-title');

    let stringToFind = input.value.toUpperCase();
    titles.forEach(item => {
        let title = item.textContent;

        if(title.includes(stringToFind)){
            item.closest('.container-section').style.display = 'block';
        } else {
            item.closest('.container-section').style.display = 'none';
        }
      } 
    )
}