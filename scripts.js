const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  
  
  text.init(form, items);
});

const text = (() => {
  let items;
  let input;
  let text;
  
  
  function init(_form, _items) {

    items=_items;

    //Fyrir formið
    input = _form.querySelector('.form__input');
    _form.addEventListener('submit', formHandler);
    
    //Fyrir items
    _items.addEventListener('click',itemsHandler);
    text = _items.querySelector('.item__text');
  }

  function itemsHandler(e) {
    e.preventDefault();
    event.stopPropagation();

    if(e.target.className==="item__checkbox")
    {  
      finish(e);
    }
    else if(e.target.className==="item__text")
    {
      edit(e);
    }
    else if(e.target.className==="item__button")
    {
      deleteItem(e);
    }
  }

  // event handler fyrir það að haka við færslu
  function finish(e) {
    e.preventDefault();

    const el = e.target.parentNode;
    el.classList.toggle('item--done');   
  }

  // event handler fyrir að það að eyða færslu
  function deleteItem(e) {
    e.preventDefault();
    console.log(e);
    const el = e.target.parentNode;
    const el1 = el.parentNode;
    el1.removeChild(el); 
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log('Ættum að vera að edita en ekkert gengur!!');
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    
  }
  
  function formHandler(e) {
    e.preventDefault();
    
    let texti = input.value;
    if(texti.trim().length===0)
    {
      input.value = "";  
    }
    else
    {
      add(texti);
      input.value = "";
    }
  }

  
  // fall sem sér um að bæta við nýju item
  function add(value) {
    
    const liElement = document.createElement('li');
    liElement.classList.add('item');

    const checkboxElement = document.createElement('input');
    checkboxElement.classList.add('item__checkbox');
    checkboxElement.setAttribute('type','checkbox');

    const textElement = document.createElement('span');
    textElement.classList.add('item__text');
    textElement.appendChild(document.createTextNode(value));

    const buttonElement = document.createElement('button');
    buttonElement.classList.add('item__button');
    buttonElement.appendChild(document.createTextNode("Eyða"));

    liElement.appendChild(checkboxElement);
    liElement.appendChild(textElement);
    liElement.appendChild(buttonElement);

    items.appendChild(liElement);   
  }

  return {
    init: init
  }
})();
