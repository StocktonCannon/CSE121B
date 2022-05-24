mainList = document.getElementById('list');

fetch('https://akabab.github.io/superhero-api/api/all.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[5].powerstats)
        for (var i = 0; i < data.length; i++){
            heroCard = document.createElement('div')
            heroCard.innerHTML = "<h2>" + data[i].name + "</h2>";
            heroCard.classList.add('card')

            divElement = document.createElement('div');
            divElement.classList.add('info')
            heroCard.appendChild(divElement);

            statsWrapperElement = document.createElement('ul');
            statsWrapperElement.classList.add('stats')
            

            imgElement = document.createElement('img');
            imgElement.setAttribute("src", data[i].images['sm']);
            divElement.appendChild(imgElement);
            
            intelligenceElement = document.createElement('li');
            intelligenceElement.innerHTML = "intelligence = " + data[i].powerstats["intelligence"];
            statsWrapperElement.appendChild(intelligenceElement);

            strengthElement = document.createElement('li');
            strengthElement.innerHTML = "strength = " + data[i].powerstats["strength"];
            statsWrapperElement.appendChild(strengthElement);

            speedElement = document.createElement('li');
            speedElement.innerHTML = "speed = " + data[i].powerstats["speed"];
            statsWrapperElement.appendChild(speedElement);

            durabilityElement = document.createElement('li');
            durabilityElement.innerHTML = "durability = " + data[i].powerstats["durability"];
            statsWrapperElement.appendChild(durabilityElement);

            powerElement = document.createElement('li');
            powerElement.innerHTML = "power = " + data[i].powerstats["power"];
            statsWrapperElement.appendChild(powerElement);

            divElement.appendChild(statsWrapperElement)
            mainList.appendChild(heroCard);
        }
    });