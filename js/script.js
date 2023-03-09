/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

    x creare array 
    x creare oggetti all interno dell array
    x stampare in console nome, ruolo e stringa foto per ogni membro
    x creare le variabili degli elementi html
    x stampare le stesse informazioni ma in pagina

*/

const arrayMembers = [{
        nome: `Wayne Barnett`,
        ruolo: `Founder & CEO`,
        foto: `wayne-barnett-founder-ceo.jpg`,
    },
    {
        nome: `Angela Caroll`,
        ruolo: `Chief Editor`,
        foto: `angela-caroll-chief-editor.jpg`,
    },
    {
        nome: `Walter Gordon`,
        ruolo: `Office Manager`,
        foto: `walter-gordon-office-manager.jpg`,
    },
    {
        nome: `Angela Lopez`,
        ruolo: `Social Media Manager`,
        foto: `angela-lopez-social-media-manager.jpg`,
    },
    {
        nome: `Scott Estrada`,
        ruolo: `Developer`,
        foto: `scott-estrada-developer.jpg`,
    },
    {
        nome: `Barbara Ramos`,
        ruolo: `Graphic Designer`,
        foto: `barbara-ramos-graphic-designer.jpg`,
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

const img1Element = document.getElementById(`img1`);
const img2Element = document.getElementById(`img2`);
const img3Element = document.getElementById(`img3`);
const img4Element = document.getElementById(`img4`);
const img5Element = document.getElementById(`img5`);
const img6Element = document.getElementById(`img6`);


for (i = 0; i < arrayMembers.length; i++) {
    membroCorrente = arrayMembers[i];
    for (let key in membroCorrente) {
        console.log(key + `: ` + membroCorrente[key]);
    
    };
};



titleNameElement.innerHTML = `Name`;
titleRoleElement.innerHTML = `Role`;
titleImgElement.innerHTML = `Image`;


member1Element.innerHTML = arrayMembers[0].nome;
role1Element.innerHTML = arrayMembers[0].ruolo;
img1Element.innerHTML = arrayMembers[0].foto;

member2Element.innerHTML = arrayMembers[1].nome;
role2Element.innerHTML = arrayMembers[1].ruolo;
img2Element.innerHTML = arrayMembers[1].foto;

member3Element.innerHTML = arrayMembers[2].nome;
role3Element.innerHTML = arrayMembers[2].ruolo;
img3Element.innerHTML = arrayMembers[2].foto;

member4Element.innerHTML = arrayMembers[3].nome;
role4Element.innerHTML = arrayMembers[3].ruolo;
img4Element.innerHTML = arrayMembers[3].foto;

member5Element.innerHTML = arrayMembers[4].nome;
role5Element.innerHTML = arrayMembers[4].ruolo;
img5Element.innerHTML = arrayMembers[4].foto;

member6Element.innerHTML = arrayMembers[5].nome;
role6Element.innerHTML = arrayMembers[5].ruolo;
img6Element.innerHTML = arrayMembers[5].foto;