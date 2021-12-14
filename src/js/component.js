import '../css/components.css';
// import webpacklogo from '../assets/img/webpack-logo.png';



export const hello = (name) => {

    console.log('tag h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${name}!!!`;

    document.body.append(h1);

//img => Add img into index.html
    /*const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img)*/

}