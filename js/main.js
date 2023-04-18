const btn = document.querySelector('button');
const header = document.querySelector('span');
const advice = document.querySelector('p');

const URL = 'https://api.adviceslip.com/advice';

const getAdvice = () => {
    axios.get(URL).then((res)=>{
        const headerId = res.data.slip.id;
        const adviceText = res.data.slip.advice;

        header.textContent = headerId
        advice.textContent = adviceText
    })
}

//non axion version

// const getAdvice = () => {
// 	fetch(URL)
// 		.then((res) => res.json())
// 		.then((data) => {
// 			header.textContent = data.slip.id;
// 			advice.textContent = data.slip.advice;
// 		});
// };

getAdvice();
btn.addEventListener('click', getAdvice);
