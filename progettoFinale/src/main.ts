import * as bootstrap from 'bootstrap';
import { TodoModel1 } from './todo.model';



// const btnLoadData: HTMLButtonElement | null = document.getElementById('btnLoadData') as HTMLButtonElement;

// if (btnLoadData != null){
//   btnLoadData.addEventListener('click', ()=>{
//     console.log('Bottone cliccato');
//     fetch('https://jsonplaceholder.typicode.com/users/1/todos')
//       .then((response)=>response.json())
//       .then((valoreDiRisposta)=>{
//         console.log(valoreDiRisposta);
//         });
//   });
// più leggibile:

const btnLoadData: HTMLButtonElement | null = document.getElementById('btnLoadData') as HTMLButtonElement;

if (btnLoadData != null){
  btnLoadData.addEventListener('click',async ()=>{
    
    console.log('Bottone cliccato');
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    const valoreDiRisposta: Array <TodoModel1> = await response.json();
    console.log(valoreDiRisposta);
  });
}
