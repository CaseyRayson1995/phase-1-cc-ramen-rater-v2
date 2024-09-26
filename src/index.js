// index.js
//When the page loads, fire a function called displayRamens (you skipped probably the most important part casey read over the code 2-3 times 1st )
// create a fetch call the gets a request from the server
//that fetch call then expects a response in return
//we already have a div with a id of "ramen-menu" in our html file so we use document.GetElementById but being that it iss empty we have to create elements if needed 



//there are only image placeholders so we need to create a div 
function displayRamens(){
fetch("http://localhost:3000/ramens")   //sending a get request to the server
.then(response => response.json())//the fetch cll returns a promise .then and we are looking for the response to be returned in json .then also takes a => function you also forgot to put .json() originally you had.json
.then(ramens =>{
    const ramenMenuDiv = document.getElementById('ramen-menu')
      ramens.forEach(ramensObj =>{   
        //console.log("~ramensObj:",ramensObj)
        //const ramenMenuItemDiv = document.createElement('div')  come back and check
        const imgElement = document.createElement('img');
        imgElement.src = ramensObj.image;
        imgElement.alt =  ramensObj.name      //<= dont forget ${} is interpolation it takes backticks not single quote you also had .src you cant get the source twice use .alt so if the image is not found we have an alternate in this case the name of the ramen will be shown 
        //best to add the click ahead of the append because of what we have in scope.
        //Click on an image from the #ramen-menu div and fire a callback called handleClick to see all the info about that ramen displayed inside the #ramen-detail div (where it says insert comment here and insert rating here).
        imgElement.addEventListener('click', (e)=> {
          handleClick(ramensObj);
          
         }) 
        //the next step would be to append our img.Elements to our ramenMenuItm then our ramenMenuItem to our ramenMenuDiv
        //in the video for BookLikr we were only required to append 1 item here we must append 2
        //ramenMenuItemDiv.append(imgElement) //no longer needed
        ramenMenuDiv.append(imgElement)
    
        
      });

      
})
}

// }
// index.js
// Callbacks
const handleClick = (ramen) => {    //we select elements by class by using . so we have .name && .resturaunt below
  // Add code
   const detailImage = document.querySelector('#ramen-detail img')   //also best to follow the ordering of the elements from the html file
    detailImage.src= ramen.image      //image always takes .src
   const detailname = document.querySelector('#ramen-detail .name')
    detailname.textContent = ramen.name  
   const detailrestaurant = document.querySelector('#ramen-detail .restaurant')
    detailrestaurant.textContent = ramen.restaurant
   const detailrating = document.getElementById('rating-display')//these 2 have Id's in the html so we dont use document.querySelector because we dont need to target something specific like the 3 above 
    detailrating.textContent = ramen.rating
   const detailComment = document.getElementById('comment-display')
    detailComment.textContent = ramen.comment   //plz dont put a space again the line should be detailComment.textContent not detailComment .textContent (same goes for the others)
};
function handleSubmit(e){
  e.preventDefault()
  const newRamen = {
    name: e.target['name'].value,      //we spoke about it in class today you thought we were supposed to use inner text but it was .value also dont forget to place the , at the end 
    restaurant: e.target['restaurant'].value,
    image: e.target['image'].value,
    rating: e.target['rating'].value,
    comment: e.target['new-comment'].value
  }
  const imgElement = document.createElement('img')
  imgElement.src = newRamen.img
  imgElement.alt = newRamen.name
  //debugger
  imgElement.addEventListener('click',(e) =>{
    handleClick(newRamen)
  })
  const ramenMenuDiv = document.getElementById('ramen-menu')
  ramenMenuDiv.append(imgElement)
}


const addSubmitListener = () => {
  // Add code

  const newRamenForm = document.getElementById('new-ramen')     //new-ramen in single or double '' ""
  newRamenForm.addEventListener('submit',handleSubmit)
  }
 // ramenMenuDiv.append(imgElement)





const main = () => {
  // Invoke displayRamens here
  displayRamens()
  // Invoke addSubmitListener here
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};

// originally line 12)  ramenDetailDiv.innerHTML = `<img src="${ramensObj.img}" alt= ramen image">`;  inner.HTML here will only display the last img 



