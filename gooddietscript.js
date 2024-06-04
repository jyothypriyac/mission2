console.log("connected");

//==feeling hungry and healthy//



const isVisible = "is-visible";
const isHidden = "is-Hidden";
const hungerText =
  "Tips to reduce hunger include eating enough protein and staying hydrated.";
const healthText =
  "Choose fish, poultry, beans, and nuts; limit red meat and cheese; avoid bacon, cold cuts, and other processed meats. Eat a variety of whole grains.";

function findData(type) {
    let div = document.getElementById("displayDiv");
    if (type == "hunger") {
        div.innerHTML = hungerText;
    } else {
        div.innerHTML = healthText;
    }
    if (div.classList.contains(isVisible)) {
        div.classList.remove(isVisible);
        div.classList.add(isHidden);
    } else {
        div.classList.add(isVisible);
        div.classList.remove(isHidden);
    }
}
//===NUTRITION TIPS FOR EVERY AGE OF LIFE==//

let Pregnancy = [
  "Whole grains",
  "millet",
  "Meats",
  "chicken and eggs",
  "Milk and yougurt",
  "Seafood",
];
let Feed = [
  "Seafood low in mercury",
  "Meat, eggs and dairy",
  "Beans",
  "Fruits and vegetables.",
];
let kids = [
  " vegetables and fruit",
  "Dried peas, beans and lentils",
  "Eggs, nuts and seeds",
  "Milk",
];
let Adult = [
  " Lean meats",
  "Wholegrain breads and cereals",
  "Fruit and vegetables",
  "Low-fat dairy foods, nuts and seeds",
];
let arrayContentOld = [
  " Fish and eggs",
  "Tofu, nuts and seeds",
  "Yoghurt and low fat milk",
  "Colourful vegetables, legumes/beans",
];
function myFunction(clickType) {
  let popupSpan = document.getElementById("myPopup");
  let str = "";
  if (clickType == "Pregnancy") {
    str =
      "<p>Choose a mix of healthy foods you enjoy from each food group <ul>";
    for (i = 0; i < Pregnancy.length; i++) {
      str += "<li>" + Pregnancy[i] + "</li>";
    }
    str = str + "</ul></p>";
  } else if (clickType == "Feed") {
    str =
      "<p>Choose a mix of healthy foods you enjoy from each food group <ul>";
    for (i = 0; i < Feed.length; i++) {
      str += "<li>" + Feed[i] + "</li>";
    }
    str = str + "</ul></p>";
  } else if (clickType == "kids") {
    str =
      "<p>Choose a mix of healthy foods you enjoy from each food group <ul>";
    for (i = 0; i < kids.length; i++) {
      str += "<li>" + kids[i] + "</li>";
    }
    str = str + "</ul></p>";
  } else if (clickType == "Adult") {
    str =
      "<p>Choose a mix of healthy foods you enjoy from each food group <ul>";
    for (i = 0; i < Adult.length; i++) {
      str += "<li>" + Adult[i] + "</li>";
    }
    str = str + "</ul></p>";
  } else if (clickType == "Old") {
    str =
      "<p>Choose a mix of healthy foods you enjoy from each food group <ul>";
    for (i = 0; i < arrayContentOld.length; i++) {
      str += "<li>" + arrayContentOld[i] + "</li>";
    }
    str = str + "</ul></p>";
  }

  popupSpan.innerHTML = str;
  popupSpan.classList.toggle("show");
}
//==BMI (weight / ((height * height)/10000==//
function calculateBMI() {
 
  let height = parseInt(document.querySelector("#height").value);

  let weight = parseInt(document.querySelector("#weight").value);

  let result = document.querySelector("#result");

  
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
 
  else {
  
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) result.innerHTML = `Under Weight : <span>Your BMI is =${bmi}</span>`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `Normal : <span>Your BMI is =${bmi}</span>`;
    else result.innerHTML = `Over Weight : <span>Your BMI is =${bmi}</span>`;
  }
}


