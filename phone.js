const phones = [
  
]


const phoneId = document.getElementById('phone')

phones.forEach((el, i) => {

  const num = el[1] != '' ? el[1] : 'No number'

  const htmlTemp = `<div class="item">${++i}. ${el[0]}: <a href="tel:${num}">${num}</a> | <a href="https://wa.me/+88${num}">WhatsApp</a></div>`
  phoneId.insertAdjacentHTML('beforeend', htmlTemp)
})

const list = document.getElementById('list')
const input = document.getElementById('input')

input.addEventListener('input', () => {

})

function inp() {
  console.log(input.value);
  let result = search(input.value);
  if (result.length !== 0) {
    list.style.display = 'block';

    let temp = ''

    result.forEach(([name, num], i)=>{
      let item = `<div class="item">${i + 1}. ${name}: <a href="tel:${num}">${num}</a> | <a href="https://wa.me/+88${num}">WhatsApp</a></div>`;
      temp += item
    })

    list.innerHTML = temp
  } else {
    list.innerHTML = 'Not found'
  }
}

input.addEventListener('focusout', () => {
  setTimeout(() => {
    console.log('out');
    list.style.display = 'none';
  }, 200);
});


input.addEventListener('focusin', ()=>{
  list.style.display = 'block';
})
/**
 * 
 * @param {string} value 
 */
function search(value) {
  let fil = phones.filter(([name, num]) =>
    name.includes(value) || num.includes(value)
  );
  //console.log(fil);
  return fil;
}
