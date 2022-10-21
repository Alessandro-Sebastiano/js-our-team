'use strict';

const cardBox = document.getElementById('box');

const NewUserName = document.getElementById('new-user-name');
const NewUserRole = document.getElementById('new-user-role');
const NewUserBtn = document.getElementById('new-user-button');

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



function addCards() {



    let newUser = {
        name: NewUserName.value,
        role: NewUserRole.value,
        profileImg: 'wayne-barnett-founder-ceo.jpg'
    };

    if (newUser.name != '' && newUser.role != '') {
        teamMembers.push(newUser);
        generateCards();
    }

    NewUserName.value = '';
    NewUserRole.value = '';

}



function generateCards() {

    cardBox.innerHTML = '';

    for (let value of teamMembers) {

        const card = document.createElement('div');

        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="./img/${value.profileImg}" class="card-img-top" alt="${value.name}">
        <div class="card-body text-center">
        <h4 id="card-name">${value.name}</h4>
        <span>${value.role}</span>
        </div>
        </div>
        `;

        cardBox.appendChild(card);

        card.classList.add('my-card');

    }


}

NewUserBtn.addEventListener('click', addCards);


generateCards();