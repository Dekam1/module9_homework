// 3 задание
// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

const input = document.querySelector('input');
const btn = document.getElementById('btn');
const resultNode = document.querySelector('.img');


function useReguest(get, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://picsum.photos/v2/list?limit=${get}`, true)
  xhr.onload = function() {
    if(xhr.status !== 200) {
      return console.log('Статус ответа: ' + xhr.status)
    } else {
      const result = JSON.parse(xhr.response);
      if(callback)
      callback(result)
    }
  }
  xhr.onerror = function() {
    return console.log('Ошибка. Статус ответа: ' + xhr.status);
  }
  xhr.send();
}

function displayResult(apiData) {
  let items = '';
  apiData.forEach((item) => {
    const itemBlock = `
    <div>
    <img 
    class="img"
    src="${item.download_url}"
    />
    </div>
    `
    items += itemBlock;
    console.log(items)
  })
  console.log(items)
  resultNode.innerHTML = items;
}

btn.addEventListener('click', () => {
  let number = input.value;
  if(number < 0 || number > 10 || !number) {
    return console.log('число вне диапазона от 1 до 10');
  } else {
    useReguest(number, displayResult)
  }
})