const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const numberOfSlides = slides.length;
console.log("nombre de slides: ", numberOfSlides)

carrousel();


function createDots() {
	// Récupération de la div de classe .dots
	const rowOfDots = document.querySelector(".dots")
	console.log(rowOfDots)
	for (let i = 0; i < numberOfSlides; i++) {
		// Création des div bullet points
		let dot = document.createElement("div");
		// Attribution de la classe .dot aux bullet points
		dot.setAttribute("class", "dot");
		// Insertion des bullet points dans l'élément parent (rowOfDots)
		rowOfDots.appendChild(dot);
		console.log(dot);
		
		if (i === 0) {
			dot.classList.add("dot_selected")
		}
		
	}	 
}

function updateDot(position) {
	// Récupération de tous les bullet points de classe .dot
	const listOfPoints = document.querySelectorAll(".dot");
	
	for (let index = 0; index< listOfPoints.length; index++) {
		
		let dot = listOfPoints[index];
		if (index === position) {
			dot.classList.add("dot_selected");
		}
		else {
			dot.classList.remove("dot_selected");
		}
		
	}
	
}

function updateSlide(position) {

	// Récupération de la slide en cours
	let CurrentSlide = slides[position];
	console.log("Slide en cours : ", CurrentSlide);

	// Récuparation de la balise <img> de classe .banner-img (image de la bannière)
	let bannerImg = document.querySelector(".banner-img");
	
	// Récuparation du chemin de l'image de la slide en cours
	let imgPath = "./assets/images/slideshow/" + CurrentSlide.image;
	console.log("imgPath: ", imgPath);

	//Récupération de la tag line de la slide en cours
	let imgTagLine = CurrentSlide.tagLine;
	console.log("La tag line est: ", imgTagLine);
	
	// L'attribut src de l'image prend la valeur imgPath
	bannerImg.src = imgPath;
	console.log("src de l'image: ", bannerImg.src);
	
	// L'attribut alt de l'image prend la valeur "Slide no. (position+1)"
	bannerImg.alt="Slide no. " + (position + 1);
	console.log("alt de l'image: ", bannerImg.alt);
	
	// Récupération du paragraphe de la bannière
	let bannerImgTitle = document.querySelector("#banner p");
	bannerImgTitle.innerHTML = imgTagLine;
	console.log("Contenu HTML du paragraphe de la bannière: ", bannerImgTitle.innerHTML);
}

function carrousel() {

	// Création des bullet points
	createDots();

	// Récupération de la balise de classe .arrow_left
	let arrowLeft = document.querySelector(".arrow_left");
	
	// Récupération de la balise de classe .arrow_right
	let arrowRight = document.querySelector(".arrow_right");

	let i = 0;
	
	arrowRight.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche droite");
		i++;
		if (i === numberOfSlides) {
			i = 0;
		}
		console.log("position slide: ", (i+1));
		updateDot(i);
		updateSlide(i);
	}
	)
	
	arrowLeft.addEventListener("click", () => {
		console.log("j'ai cliqué sur la flèche gauche");
		i--;
		if (i === -1) {
			i = numberOfSlides - 1;
		}
		console.log("position slide: ", (i+1));
		updateDot(i);
		updateSlide(i);
	}
	)

}

