const sect = document.querySelector('.lists');

const myLists = [
  {
    id: 1,
    heading: 'My heading',
    desc: 'My desc',
  },
  {
    id: 2,
    heading: 'My heading two',
    desc: 'My desc',
  },
  {
    id: 3,
    heading: 'My heading three',
    desc: 'My desc',
  },
];

const allLists = () => {
  sect.innerHTML = '';
  for (let i = 0; i < myLists.length; i += 1) {
    const listWrapper = document.createElement('div');
    const listHeading = document.createElement('h2');
    listHeading.textContent = myLists[i].heading;
    const listDesc = document.createElement('p');
    listDesc.textContent = myLists[i].desc;
    const listBtn = document.createElement('button');
    listBtn.textContent = 'Example';

    listWrapper.append(listHeading, listDesc, listBtn);

    sect.appendChild(listWrapper);

    listBtn.addEventListener('click', () => {
      // console.log(`The button at id: ${myLists[i].id} was clicked`);
    });
  }
};

window.addEventListener('load', () => {
  allLists();
});