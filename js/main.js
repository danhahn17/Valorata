function viewAgent() {
  const agent = new XMLHttpRequest();
  agent.open('GET', 'https://valorant-api.com/v1/agents/');
  agent.responseType = 'json';
  agent.addEventListener('load', function () {
    for (let i = 0; i < 6; i++) {
      $agentRow1.appendChild(createAgentElement(agent.response.data[i]));
    }
    for (let i = 6; i < 13; i++) {
      if (i !== 9) {
        $agentRow2.appendChild(createAgentElement(agent.response.data[i]));
      }
    }
    for (let i = 13; i < 19; i++) {
      $agentRow3.appendChild(createAgentElement(agent.response.data[i]));
    }
    for (let i = 19; i < 24; i++) {
      $agentRow4.appendChild(createAgentElement(agent.response.data[i]));
      $agentRow4.appendChild($agentUnknown);
    }
  });
  agent.send();
}

const $agentRow1 = document.querySelector('.agent-row-1');
const $agentRow2 = document.querySelector('.agent-row-2');
const $agentRow3 = document.querySelector('.agent-row-3');
const $agentRow4 = document.querySelector('.agent-row-4');

const $agentUnknown = document.createElement('a');
$agentUnknown.setAttribute('class', 'agent-select');
const $triangle = document.createElement('div');
$triangle.setAttribute('class', 'triangle');
const $rectangle = document.createElement('div');
$rectangle.setAttribute('class', 'rectangle');
const $agentName = document.createElement('div');
$agentName.setAttribute('class', 'agent-name');
$agentName.textContent = 'TBA';

$agentUnknown.appendChild($triangle);
$agentUnknown.appendChild($rectangle);
$agentUnknown.appendChild($agentName);

function createAgentElement(index) {
  const $agentParent = document.createElement('a');
  $agentParent.setAttribute('class', 'agent-select');

  const $triangle = document.createElement('div');
  $triangle.setAttribute('class', 'triangle');

  const $rectangle = document.createElement('div');
  $rectangle.setAttribute('class', 'rectangle');

  const $agentImage = document.createElement('img');
  $agentImage.setAttribute('src', index.bustPortrait);
  $agentImage.setAttribute('class', 'agent-picture');

  const $agentName = document.createElement('div');
  $agentName.setAttribute('class', 'agent-name');
  $agentName.textContent = index.displayName;

  $agentParent.appendChild($triangle);
  $agentParent.appendChild($rectangle);
  $agentParent.appendChild($agentImage);
  $agentParent.appendChild($agentName);

  return $agentParent;
}

function viewWeapon() {
  const weapon = new XMLHttpRequest();
  weapon.open('GET', 'https://valorant-api.com/v1/weapons/');
  weapon.responseType = 'json';
  weapon.addEventListener('load', function () {
    for (let i = 0; i < 4; i++) {
      $weaponRow1.appendChild(createWeaponElement(weapon.response.data[i]));
    }
    for (let i = 4; i < 8; i++) {
      $weaponRow2.appendChild(createWeaponElement(weapon.response.data[i]));
    }
    for (let i = 8; i < 9; i++) {
      $weaponRow3.appendChild(createWeaponElement(weapon.response.data[i]));
    }
    for (let i = 9; i < 13; i++) {
      $weaponRow4.appendChild(createWeaponElement(weapon.response.data[i]));
    }
    for (let i = 13; i < 17; i++) {
      $weaponRow5.appendChild(createWeaponElement(weapon.response.data[i]));
    }
    for (let i = 17; i < 18; i++) {
      $weaponRow6.appendChild(createWeaponElement(weapon.response.data[i]));
    }
  });
  weapon.send();
}

const $weaponRow1 = document.querySelector('.weapon-group-1-row-1');
const $weaponRow2 = document.querySelector('.weapon-group-1-row-2');
const $weaponRow3 = document.querySelector('.weapon-group-1-row-alone');
const $weaponRow4 = document.querySelector('.weapon-group-2-row-1');
const $weaponRow5 = document.querySelector('.weapon-group-2-row-2');
const $weaponRow6 = document.querySelector('.weapon-group-2-row-alone');

function createWeaponElement(index) {
  const $weaponParent = document.createElement('a');
  $weaponParent.setAttribute('class', 'weapon-container');

  const $weaponImage = document.createElement('img');
  $weaponImage.setAttribute('src', index.displayIcon);
  $weaponImage.setAttribute('class', 'weapon-image');

  const $weaponName = document.createElement('div');
  $weaponName.setAttribute('class', 'weapon-name');
  $weaponName.textContent = index.displayName;

  $weaponParent.appendChild($weaponImage);
  $weaponParent.appendChild($weaponName);

  return $weaponParent;
}

// function createCustomWeaponElement(index) {
//   const $weaponParent = document.createElement('a');
//   $weaponParent.setAttribute('class', 'weapon-container');

//   const $weaponImage = document.createElement('img');
//   $weaponImage.setAttribute('src', index.displayIcon);
//   $weaponImage.setAttribute('class', 'weapon-image-smaller-width');

//   const $weaponName = document.createElement('div');
//   $weaponName.setAttribute('class', 'weapon-name');
//   $weaponName.textContent = index.displayName;

//   $weaponParent.appendChild($weaponImage);
//   $weaponParent.appendChild($weaponName);

//   return $weaponParent;
// }

// const map = new XMLHttpRequest();
// map.open('GET', 'https://valorant-api.com/v1/maps/');
// map.responseType = 'json';
// map.addEventListener('load', function () {
//   for (let i = 0; i < 6; i++) {
//     $agentRow1.appendChild(createAgentElement(map.response.data[i]));
//   }
//   for (let i = 6; i < 13; i++) {
//     if (i !== 9) {
//       $agentRow2.appendChild(createAgentElement(map.response.data[i]));
//     }
//   }
//   for (let i = 13; i < 19; i++) {
//     $agentRow3.appendChild(createAgentElement(map.response.data[i]));
//   }
//   for (let i = 19; i < 24; i++) {
//     $agentRow4.appendChild(createAgentElement(map.response.data[i]));
//     $agentRow4.appendChild($agentUnknown);
//   }
// });
// map.send();

const $homepageTab = document.querySelector('[data-view=homepage]');
const $agentViewPage1 = document.querySelector(
  '[data-view=agents-view-page-1]',
);
const $agentViewPage2 = document.querySelector(
  '[data-view=agents-view-page-2]',
);
const $selectedAgentPage = document.querySelector(
  '[data-view=selected-agent-page]',
);
const $weaponViewPage1 = document.querySelector(
  '[data-view=weapons-view-page-1]',
);
const $weaponViewPage2 = document.querySelector(
  '[data-view=weapons-view-page-2]',
);
const $selectedWeaponPage = document.querySelector(
  '[data-view=selected-weapon-page]',
);
const $mapViewPage1 = document.querySelector('[data-view=maps-view-page-1]');
const $mapViewPage2 = document.querySelector('[data-view=maps-view-page-2]');
const $selectedMapPage = document.querySelector(
  '[data-view=selected-map-page]',
);
const $createCardPage = document.querySelector(
  '[data-view=create-a-card-page]',
);
const $galleryPage = document.querySelector('[data-view=gallery-page]');
const $selectedCardPage = document.querySelector(
  '[data-view=selected-card-page]',
);

function viewSwap(clickedAway) {
  if (clickedAway === 'homepage') {
    $homepageTab.className = 'homepage';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'agents-view-page-1') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'agents-first-group-container';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'agents-view-page-2') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'agents-second-group-container';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'selected-agent-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'row agent-select-view-container';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'weapons-view-page-1') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'weapon-page-container-1';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'weapons-view-page-2') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'weapon-page-container-2';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'selected-weapon-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'row selected-weapon-view-page';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'maps-view-page-1') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'maps-group-container-1';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'maps-view-page-2') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'maps-group-container-2';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'selected-map-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'selected-map-view-page-container';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'create-a-card-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'create-a-card-container';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'gallery-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'gallery-card-background';
    $selectedCardPage.className = 'hidden';
  } else if (clickedAway === 'selected-card-page') {
    $homepageTab.className = 'hidden';
    $agentViewPage1.className = 'hidden';
    $agentViewPage2.className = 'hidden';
    $selectedAgentPage.className = 'hidden';
    $weaponViewPage1.className = 'hidden';
    $weaponViewPage2.className = 'hidden';
    $selectedWeaponPage.className = 'hidden';
    $mapViewPage1.className = 'hidden';
    $mapViewPage2.className = 'hidden';
    $selectedMapPage.className = 'hidden';
    $createCardPage.className = 'hidden';
    $galleryPage.className = 'hidden';
    $selectedCardPage.className = 'clicked-gallery-card';
  }
}

const $clickedLogo = document.querySelector('.header');
const $clickAgentTab = document.querySelector('.agents-tab');
const $clickNextAgent = document.querySelector('.next-agent-button');
const $clickPreviousAgent = document.querySelector('.previous-agent-button');

$clickedLogo.addEventListener('click', function (event) {
  viewSwap('homepage');
});

$clickAgentTab.addEventListener('click', function (event) {
  viewSwap('agents-view-page-1');
});
$clickAgentTab.addEventListener('click', viewAgent());

$clickNextAgent.addEventListener('click', function (event) {
  viewSwap('agents-view-page-2');
});

$clickPreviousAgent.addEventListener('click', function (event) {
  viewSwap('agents-view-page-1');
});

// $selectedAgentPage
// $weaponViewPage1
// $weaponViewPage2
// $selectedWeaponPage
// $mapViewPage1
// $mapViewPage2
// $selectedMapPage
// $createCardPage
// $galleryPage
// $selectedCardPage

// const $clickAgent = document.querySelector('.agent-select');
// $clickAgent.addEventListener('click', function (event) {
//   viewSwap('selected-agent-page');
// });

const $clickWeaponsTab = document.querySelector('.weapons-tab');
$clickWeaponsTab.addEventListener('click', function (event) {
  viewSwap('weapons-view-page-1');
});
$clickWeaponsTab.addEventListener('click', viewWeapon());

const $clickNextWeapon = document.querySelector('.next-weapon-button');
$clickNextWeapon.addEventListener('click', function (event) {
  viewSwap('weapons-view-page-2');
});

const $clickPreviousWeapon = document.querySelector('.previous-weapon-button');
$clickPreviousWeapon.addEventListener('click', function (event) {
  viewSwap('weapons-view-page-1');
});

// const $clickWeapon1 = document.querySelector('.weapon-container');
// const $clickWeapon2 = document.querySelector('.weapon-container-last');
// $clickWeapon1.addEventListener('click', function (event) {
//   viewSwap('selected-weapon-page');
// });
// $clickWeapon2.addEventListener('click', function (event) {
//   viewSwap('selected-weapon-page');
// });

const $clickMapTab = document.querySelector('.maps-tab');
$clickMapTab.addEventListener('click', function (event) {
  viewSwap('maps-view-page-1');
});

const $clickNextMap = document.querySelector('.next-maps-button');
$clickNextMap.addEventListener('click', function (event) {
  viewSwap('maps-view-page-2');
});

const $clickPreviousMap = document.querySelector('.previous-maps-button');
$clickPreviousMap.addEventListener('click', function (event) {
  viewSwap('maps-view-page-1');
});

// const $clickMap = document.querySelector('.maps-group');
// $clickMap.addEventListener('click', function (event) {
//   viewSwap('selected-map-page');
// });

const $clickCreateCard = document.querySelector('.create-a-card-tab');
$clickCreateCard.addEventListener('click', function (event) {
  viewSwap('create-a-card-page');
});

const $clickSave = document.querySelector('.create-card-save-button');
$clickSave.addEventListener('click', function (event) {
  viewSwap('gallery-page');
});

const $clickGallery = document.querySelector('.gallery-tab');
$clickGallery.addEventListener('click', function (event) {
  viewSwap('gallery-page');
});
