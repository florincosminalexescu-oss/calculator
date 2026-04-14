const adaugaNumar = (numar) =>   document.getElementById('display').value+=numar;


const adaugaOperatie = (op)=> document.getElementById('display').value+=op;


const calculeaza =()=>{
    let rezultat=eval(document.getElementById('display').value);
    document.getElementById('display').value=rezultat;
}


const sterge=() => document.getElementById('display').value='';



