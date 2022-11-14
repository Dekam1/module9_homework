function useReguest(page, limit, calback) {
	if(!page || page <= 0 || page > 10) {
		const message = `
		<p>Номер страницы вне диапазона от 1 до 10</p>
		`
		show.innerHTML = message;
		setTimeout(() => {
			show.innerHTML = '';
		}, 2000)
	} else if(!limit || limit <= 0 || limit > 10) {
		const message = `
		<p>Лимит вне диапазона от 1 до 10</p>
		`
		show.innerHTML = message;
		setTimeout(() => {
			show.innerHTML = '';
		}, 2000)
	} 

	if(!page || page <= 0 || page > 10 && !limit || limit <= 0 || limit > 10) {
		const message = `
		<p>Номер страницы и лимит вне диапазона от 1 до 10</p>
		`
		show.innerHTML = message;
		setTimeout(() => {
			show.innerHTML = '';
		}, 2000)
	} else {
		return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
		.then((response) => {
      return response.json();
    })
		.then((json) => { return calback(json); })
		.catch((error) => {
			console.log('error', error)
		});
	}
}

function display(apiData) {
	let items = ''
	apiData.forEach((item) => {
		const divBlock = `
		<img
		class='img'
		src='${item.download_url}'
		/>
		`
		console.log(item.id)
		items += divBlock;
	})
	show.innerHTML = items;
	localStorage.setItem('myCat', items);
}

const inputPage = document.getElementById('page-number');
const inputLimit = document.getElementById('limit');
const btn = document.getElementById('btn');
const show = document.getElementById('show');


btn.addEventListener('click', async () => {
	const page = inputPage.value;
	const limit = inputLimit.value;
  
  const requestResult = await useReguest(page, limit, display);
});

show.innerHTML = localStorage.getItem('myCat');