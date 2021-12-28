import  data from './data.js';
let hamburger = document.getElementById("hamburger");
let sideDrawer = document.getElementById('sideDrawer');
let mobileMenuClose = document.getElementById('mobileMenuClose');
let crew_list_menu = document.getElementById('crew_list_menu');


let destinations_list_menu = document.getElementById('destinations_list_menu');
let technologyListMenu = document.getElementById('technologyListMenu');

let destination_image = document.getElementById('destination_image');
let destination_name = document.getElementById('destination_name');
let destination_description = document.getElementById('destination_description');
let destination_distance = document.getElementById('destination_distance');
let destination_time = document.getElementById('destination_time');


let crew_role = document.getElementById('crew_role');
let crew_name = document.getElementById('crew_name');
let crew_description = document.getElementById('crew_description');
let crew_image = document.getElementById('crew_image');

hamburger.addEventListener('click', function () {
    sideDrawer.classList.add('w-3/4');
    hamburger.style.display = 'none';
});

mobileMenuClose.addEventListener('click', function () {
    sideDrawer.classList.remove('w-3/4');
    hamburger.style.display = 'block';
})


let { destinations, crew, technology } = data;


destination_name.innerHTML = destinations[0].name;
destination_description.innerHTML = destinations[0].description;
destination_image.src = destinations[0].images.png;
destination_distance.innerHTML = destinations[0].distance;
destination_time.innerHTML = destinations[0].travel;

crew_role.innerHTML = crew[0].role;
crew_name.innerHTML = crew[0].name;
crew_description.innerHTML = crew[0].bio;
crew_image.src = crew[0].images.png;






let destinationNodes = destinations.map((destination,index) => {
    let nodeItem = document.createElement('a');
    nodeItem.classList.add('text-px30', 'text-white', 'no-underline', 'cursor-pointer','menu-item');
    nodeItem.innerText = destination.name;



    nodeItem.addEventListener('click', function (e) {
    destination_image.src = destination.images.png;
    destination_description.innerText = destination.description;
    destination_name.innerText = destination.name;
    destination_distance.innerText = destination.distance;
    destination_time.innerText = destination.travel;
    nodeItem.style.borderBottom = '3px solid #fff';
        removeBorder(index);

    })
   return nodeItem;
} );

destinationNodes[0].style.borderBottom = '3px solid #fff';
function removeBorder(index) {
    destinationNodes.forEach((crewNode, i) => {
        if (i !== index) {
            crewNode.style.border = 'none';
        }
    })
}


let crewNodes = crew.map((crew,index) => {
    let nodeItem = document.createElement('div');
    nodeItem.classList.add('w-6', 'h-6','opacity-50', 'bg-white', 'rounded-full','cursor-pointer');

    nodeItem.addEventListener('click', function (e) {
        crew_image.src = crew.images.png;
        crew_description.innerText = crew.bio;
        crew_name.innerText = crew.name;
        crew_role.innerText = crew.role;
        removeOpacity(index, 'crew');


        nodeItem.classList.add('opacity-100');
      

    })
    return nodeItem;
} );

crewNodes[0].classList.add('opacity-100');

crew_list_menu.append(...crewNodes);
destinations_list_menu.append(...destinationNodes);


function removeOpacity (index,casee) {

    switch (casee) {
        case 'crew':
           crewNodes.forEach((crewNode, i) => {
        if (i !== index) {
        
            crewNode.classList.remove('opacity-100');
        }
    }) 
            break;
        case 'technology':
            tecnologyNodes.forEach((tecnologyNode, i) => {
                tecnologyNode.classList.remove('opacity-100');
            })
    }
    
}
let mql = window.matchMedia('(max-width:576px)');


let technologyHeading = document.getElementById('technologyHeading');
let technologyDescription = document.getElementById('technologyDescription');
let technologyImage = document.getElementById('technologyImage');

console.log(mql);

technologyHeading.innerText = technology[0].name;
technologyDescription.innerText = technology[0].description;
technologyImage.src = mql.matches ? technology[0].images.landscape : technology[0].images.portrait;
technology[0].images.portrait;



let tecnologyNodes = technology.map((technology,index) => {
    let nodeItem = document.createElement('div');
    nodeItem.classList.add('w-12', 'h-12','lg:w-24','lg:h-24','opacity-50','font-bold' ,'bg-white', 'rounded-full','cursor-pointer','flex','items-center','justify-center','text-white');
    nodeItem.innerText = index+1;
    nodeItem.style.textAlign = 'center';
    nodeItem.style.fontSize = '1.5rem';
    nodeItem.style.color = 'white';
    nodeItem.addEventListener('click', function (e) {
        nodeItem.classList.add('opacity-100');
        technologyHeading.innerText = technology.name;
        technologyDescription.innerText = technology.description;
        technologyImage.src = technology.images.landscape;
        removeOpacity(index,'technology');

        nodeItem.classList.add('opacity-100');

    })
    return nodeItem;
} );

tecnologyNodes[0].classList.add('opacity-100');

technologyListMenu.append(...tecnologyNodes);