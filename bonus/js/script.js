/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

    x creare array 
    x creare oggetti all interno dell array
    x stampare in console nome, ruolo e stringa foto per ogni membro
    x creare le variabili degli elementi html
    x stampare le stesse informazioni ma in pagina
    x eliminare le variabili delle foto da js

*/

const arrayMembers = [{
    nome: `Wayne Barnett`,
    ruolo: `Founder & CEO`,
},
{
    nome: `Angela Caroll`,
    ruolo: `Chief Editor`,
},
{
    nome: `Walter Gordon`,
    ruolo: `Office Manager`,
},
{
    nome: `Angela Lopez`,
    ruolo: `Social Media Manager`,
},
{
    nome: `Scott Estrada`,
    ruolo: `Developer`,
},
{
    nome: `Barbara Ramos`,
    ruolo: `Graphic Designer`,
}
];

const titleNameElement = document.getElementById(`title-name`);
const titleRoleElement = document.getElementById(`title-role`);
const titleImgElement = document.getElementById(`title-img`);

const member1Element = document.getElementById(`member1`);
const member2Element = document.getElementById(`member2`);
const member3Element = document.getElementById(`member3`);
const member4Element = document.getElementById(`member4`);
const member5Element = document.getElementById(`member5`);
const member6Element = document.getElementById(`member6`);

const role1Element = document.getElementById(`role1`);
const role2Element = document.getElementById(`role2`);
const role3Element = document.getElementById(`role3`);
const role4Element = document.getElementById(`role4`);
const role5Element = document.getElementById(`role5`);
const role6Element = document.getElementById(`role6`);


for (let key in arrayMembers) {
console.log(arrayMembers[key].nome + ` ` + arrayMembers[key].ruolo + ` ` + arrayMembers[key].foto);

};


titleNameElement.innerHTML = `Name`;
titleRoleElement.innerHTML = `Role`;
titleImgElement.innerHTML = `Image`;


member1Element.innerHTML = arrayMembers[0].nome;
role1Element.innerHTML = arrayMembers[0].ruolo;

member2Element.innerHTML = arrayMembers[1].nome;
role2Element.innerHTML = arrayMembers[1].ruolo;

member3Element.innerHTML = arrayMembers[2].nome;
role3Element.innerHTML = arrayMembers[2].ruolo;

member4Element.innerHTML = arrayMembers[3].nome;
role4Element.innerHTML = arrayMembers[3].ruolo;

member5Element.innerHTML = arrayMembers[4].nome;
role5Element.innerHTML = arrayMembers[4].ruolo;

member6Element.innerHTML = arrayMembers[5].nome;
role6Element.innerHTML = arrayMembers[5].ruolo;