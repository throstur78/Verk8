const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  
  text.init(form, items);
});

const text = (() => {
  let items;
  let input;
  
  
  function init(_form, _items) {
    items = _items;

    //Fyrir formið
    input = _form.querySelector('.form__input');
    _form.addEventListener('submit', formHandler);
    
    //Fyrir items
    _items.addEventListener('change',finish);
    //_items.addEventListener('input',edit);
    //buttonDestroy.addEventListener('click', deleteItem);
  }

  function deleteItem(e) {
    e.preventDefault();
    const el = e.target.parentNode;
    const el1 = el.parentNode;
    el1.removeChild(el);
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log('erum að edita!!!');
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    console.log('add virkar');
    const liElement = document.createElement('li');
    liElement.classList.add('item');

    const checkboxElement = document.createElement('input');
    checkboxElement.classList.add('item__checkbox');

    const textElement = document.createElement('span');
    textElement.classList.add('item__text');
    textElement.appendChild(document.createTextNode(value));

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('item__button');

    liElement.appendChild(checkboxElement);
    liElement.appendChild(textElement);
    liElement.appendChild(buttonElement);
    

  }
  
  function formHandler(e) {
    e.preventDefault();
  
    let texti = input.value;
    add(texti);
    input.value = "";
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.preventDefault();
    const el = event.target.parentNode;
    el.classList.toggle('item--done');   
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    //const el = document.createElement(li,item,);
      //Hvernig eru þessi börn bætt við??? 
      //<input type="checkbox" checked class="item__checkbox">
      //<span class="item__text">Sækja verkefni</span>
      //<button class="item__button">Eyða</button>

  }

  return {
    init: init
  }
})();
