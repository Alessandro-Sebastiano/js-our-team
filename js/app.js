'use strict';

const cardBox = document.getElementById('box');


const teamMembers = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        profileImg: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        profileImg: 'angela-caroll-chief-editor.jpg'
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        profileImg: 'walter-gordon-office-manager.jpg'
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        profileImg: 'angela-lopez-social-media-manager.jpg'
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        profileImg: 'scott-estrada-developer.jpg'
    },

    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        profileImg: 'barbara-ramos-graphic-designer.jpg'
    }

];


for (let value of teamMembers) {

    const card = document.createElement('div');

    card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img src="./img/${value.profileImg}" class="card-img-top" alt="...">
    <div class="card-body text-center">
      <h4 id="card-name">${value.name}</h4>
      <span>${value.role}</span>
    </div>
    </div>
    `;

    cardBox.appendChild(card);

    card.classList.add('my-3');

}


