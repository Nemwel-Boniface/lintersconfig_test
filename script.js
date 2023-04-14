const sect = document.querySelector('.lists');

const my_array = [1, 2,3,4]

const my_lists = [
  {
    id: 1,
    heading: 'My heading',
    desc: 'My desc'
  },
  {
    id: 2,
    heading: 'My heading two',
    desc: 'My desc'
  },
  {
    id: 3,
    heading: 'My heading three',
    desc: 'My desc'
  }
];

console.log(my_lists[1].heading)

let allLists = () => {
  sect.innerHTML = '';
  for(let i = 0; i < my_lists.length; i++) {
    const listWrapper = document.createElement('div');
    const listHeading = document.createElement('h2');
    listHeading.textContent = my_lists[i].heading;
    const listDesc = document.createElement('p');
    listDesc.textContent = my_lists[i].desc;
    const listBtn = document.createElement('button');
    listBtn.textContent = 'Example';

    listWrapper.append(listHeading, listDesc, listBtn);

    sect.appendChild(listWrapper)

    listBtn.addEventListener('click', () => {
      console.log(`The button at id: ${my_lists[i].id} was clicked`)
    })
  }

}

allLists()


// window.addEventListener('load', () => {
//   allLists()
// })