// This is a function that takes a page path as an argument
// You need to make the function load the content of that page into the "content" div on the index file
async function loadPage(page) {
  // fetch the page, use await
  const res = await fetch(page);
  // get text from res, use await
  const content = await res.text();
  // get the element with id 'content'
  const element = document.getElementById('content');
  // set innerHTML of the element
  // your code goes here
  element.innerHTML = content;
}

loadPage('signin.html');

function resetLink(linkId) {
  console.log('reset' + linkId);
  console.log(document.getElementsByClassName('nav-link').length);
  for (ele of document.getElementsByClassName('nav-link')) {
    ele.className = 'nav-link';
  }
  let currentElement = document.getElementById(linkId);
  currentElement.className = 'nav-link active';

}

function route() {
  let link = location.hash.replace('#','');
  let linkId = link.replace('.html','');
  console.log('page: ', link);
  console.log('pageId: ', linkId);
  resetLink(linkId);
  loadPage(link);
}

window.addEventListener('hashchange', route);
