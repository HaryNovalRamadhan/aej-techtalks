const searchElement = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const foodList = document.querySelector('#foodList');

const searchFood = () => {
    foodList.innerHTML = ''
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchElement.value}`)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            if(responseJson.meals){
                for(let i=0; i < responseJson.meals.length; i++){
                    const foodItem = document.createElement('div');
                    foodItem.setAttribute('class', 'foodItem');

                    foodItem.innerHTML = `
                        <img src="${responseJson.meals[i].strMealThumb}" />
                        <h1>${responseJson.meals[i].strMeal}</h1>
                    `

                    foodList.appendChild(foodItem);
                }
            } else {
                alert(`Maaf menu ${searchElement.value} tidak tersedia!`)
            }
        })
}

searchButton.addEventListener('click', searchFood)