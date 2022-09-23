const carouselContainer=document.getElementById('container');
// create profile
const profiles = [
    {
        name:"Sir Abubakar Tafawa Balewa",
        img: "images/sir abubakar tafawa balewa.jpeg",
        alt:"picture of sir abubakar tafawa balewa",
        years: "1912-1966",
        text:"Born in december 1912 was a Nigerian politician served as the first and only prime minister upon Independence.",
        link:"https://en.m.wikipedia.org/wiki/Abubakar_Tafawa_Balewa",     

    },

    {
        name:"Sir Nnamdi Azikiwe",
        img: "images/sir nmandi.jpeg",
        alt:" picture of sir nmandi azikwe",
        years: "1904-1996",
        text:"Refer to as (Zik) was a Stateman and political leader who served as the first president of Nigeria from 1963-1966.",
        link:"https://en.m.wikipedia.org/wiki/Nnamdi_Azikiwe",

    },

    {
        name:"Chief Obafemi Awolowo",
        img: "images/chief obafemi.jpeg",
        alt:"picture of chief obafemi awolowo",
        years: "1909-1987",
        text:" was a Nigerian nationalist and stateman who played a key role in Nigerian`s independece movement.",
        link:"https://en.m.wikipedia.org/wiki/Obafemi_Awolowo",

    },

    {
        name:"Sir Ahmadu Bello",
        img: "images/sir-ahmadu bello.jpeg",
        alt:"picture of sir ahmadu bello",
        years: "1910-1966",
        text:"(Sardauna) was a conservative Nigerian Stateman who masterminded Northern Nigeria through the independence in 1960.",
        link:"https://en.m.wikipedia.org/wiki/Ahmadu_Bello",

    },
    {
        name:"Sir Alvan ikoku",
        img: "images/sir-a.jpeg",
        alt:"picture of sir alvan ikoku",
        years: "1900-1971",
        text:"Born in August 1 1900, Sir Alvan Azinna ikoku was a Nigerian educationist,Stateman,activist and politician.",
        link:"https://en.m.wikipedia.org/wiki/Alvan_Ikoku",

    },
    {
        name:"Prof. Eyo Ita",
        img: "images/.jpeg",
        alt:"picture of professor eyo ita",
        years: "1903-1972",
        text:"Was a Nigerian educationist and politician,who was the leader of Eastern Government of Nigeria in 1951 and the first professor Nigria ever had.",
        link:"https://en.m.wikipedia.org/wiki/Eyo_Ita",

    },
]


function display() {
    profiles.forEach(profile => {
        let cardElement = document.createElement('div')
        cardElement.classList.add('card')
        carouselContainer.append(cardElement)
     // create image container and element
     
     const imageContainer = document.createElement('div')
     imageContainer.classList.add('image-container')
     

     const imageElement = document.createElement('img')
     imageElement.setAttribute('src',profile.img)
     imageElement.setAttribute('alt',profile.alt)
     imageContainer.append(imageElement)

     const nameContainer = document.createElement('div')
     nameContainer.classList.add('name-container')
     nameContainer.textContent = profile.name

     const paragraphElement = document.createElement('p')
     paragraphElement.textContent=profile.text
 // create a link element for url redirection
     const linkElement = document.createElement('a')
     linkElement.classList.add('link-button')
     linkElement.setAttribute('href',profile.link)
     linkElement.textContent="See More"

     cardElement.append(imageContainer,nameContainer,paragraphElement,linkElement)
     
     
     

    });
}

display()