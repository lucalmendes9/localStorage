const btnFalar = document.getElementById('falar');

let numRecentes = localStorage.getItem('numRecentes') ? JSON.parse(localStorage.getItem('numRecentes')) : [] ;

loadStorage();

btnFalar.addEventListener('click', function() {
    var number = document.querySelector('.form input').value;
    
    toWhats(number);

    numRecentes.push(number);
    
    loadStorage();

    document.querySelector('.form input').value = '';
});

function toWhats(number){
    window.open('https://wa.me/55'+number+'', '_blank');
}

function loadStorage(){
    localStorage.setItem('numRecentes', JSON.stringify(numRecentes))
    const data = JSON.parse( localStorage.getItem('numRecentes') );

    data.forEach(item => {
        addList(item);
        console.log(item)
    })
}

function addList(item){
    var list = document.createElement('li');
    var linkList = document.createElement('a');
    linkList.setAttribute('href', 'https://wa.me/55'+item+'');
    linkList.setAttribute('target', '_blank');
    var newElement = document.createTextNode(item);
    linkList.appendChild(newElement);
    list.appendChild(linkList);
    document.querySelector('.storage ul').appendChild(list);
}