const root = document.getElementById('root');
const button = document.getElementById('btn');

console.log(root);

//const h2 = document.createElement('h2');
const h1 = document.createElement('h1');
//const img=document.createElement('img');
const loader = document.createElement('h1');


async function showData() {
    try {
        loader.innerHTML = 'Loading data.....';
        root.appendChild(loader);

        const serverData = await fetch('https://fakestoreapi.com/products')
        const jsonData = await serverData.json();


        let table = `<table border='2px'>
            ${
            jsonData.map((ele) => `
            <tr>
            <td><img src="${ele.image}" height="200" width="200"></img></td>
            <td>${ele.id}</td>
            <td>${ele.title}</td>
            <td>${ele.price}</td>
            </tr>
            `).join('')
            }
        </table>`

 // root.innerHTML = `<h2 style="color:red;">${jsonData[0].title}</h2>`;
   // h2.innerText = 'Welcome to DOM manipulations';
    //h1.innerText='ABES ENGINEERING COLLEGE';
   // img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLcFva_FUOwJtZDl1w2lXGdE_LC7fzUZ7IiJV4X9yPZg&s=10';
   // img.setAttribute('height',200);
   // img.setAttribute('width',200);
   // root.appendChild(h2);
   root.innerHTML = table;
   // root.appendChild(img);
    }catch(e){
        console.log(e);
        
    }finally{
        root.removeChild(loader);

    }

}

button.addEventListener('click', showData);