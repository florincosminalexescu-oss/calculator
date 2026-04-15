const adaugaNumar = (numar) =>   document.getElementById('display').value+=numar;


const adaugaOperatie = (op)=> document.getElementById('display').value+=op;


const calculeaza =()=>{
    let rezultat=eval(document.getElementById('display').value);
    document.getElementById('display').value=rezultat;
}


const sterge=() => document.getElementById('display').value='';


const butoaneNumere = document.querySelectorAll('.numar');
butoaneNumere.forEach((buton) => {
    buton.addEventListener('click', () => {
        adaugaNumar(buton.textContent);
    });
});

    const butoaneOperatie = document.querySelectorAll('.operatie');

    butoaneOperatie.forEach((buton)=>{
        buton.addEventListener('click',()=>{
            adaugaOperatie(buton.textContent);
        });
    });



const stergeCaracter = () => {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);}