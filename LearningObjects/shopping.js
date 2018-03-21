// *********** RECIPES (don't change anything here) ************

const superSoup = { // in a recipe, the values are the quantity of that ingredient
  potato: 3,
  onion: 1,
  corn: 5
};

const pie = {
  meat: 2,
  onion: 2,
  pea: 5
};

const mazala = {
  chicken: 1,
  tomato: 3,
  pepper: 2
};

const allRecipes = [superSoup, pie, mazala];

// ************** STORES (don't change anything here) ***********

const ica = { // in a store, the values are the prices per ingredient
  chicken: 8,
  corn: 3,
  meat: 6,
  onion: 4,
  pea: 1,
  pepper: 7,
  potato: 5,
  tomato: 6
};

const coop = {
  chicken: 6,
  corn: 2,
  meat: 9,
  onion: 5,
  pea: 2,
  pepper: 6,
  potato: 3,
  tomato: 3
};

const willys = {
  chicken: 6,
  corn: 2,
  meat: 9,
  onion: 5,
  pea: 2,
  pepper: 8,
  potato: 3,
  tomato: 4
};

const allStores = { // this is an example of a "storeCollection"
  Willys: willys,
  ICA: ica,
  COOP: coop,
};

// *************** FUNCTIONS (for you to implement!) *************

function totalNumberOfIngredients(recipe) {
  // make it return the total number of ingredients in recipe
  let max = 0;
  for (const key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      const element = recipe[key];
      max += element;
    }
  }
  return max;
}





function costOfRecipeInStore(recipe, store) {
  // make it return what it costs to shop for recipe at store
  let max = 0;
  for (const key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      const element = recipe[key];
      max += (element * store[key]);
    }
  }
  return max;
}



function costOfRecipesInStore(recipe, store) {
  // it takes an array of recipes and a store, and should return
  // the total cost for shopping for all the recipes in the given store.
  // Feel free to use costOfRecipe inside this function!
  let max = 0;
  for (const recce of recipe) {
      max += costOfRecipeInStore(recce, store)
  }
  return max;
}


function mostExpensiveIngredient(store) {
  // make it return the name of the most expensive ingredient
  // in the given store
  let max = 0;
  let ingr = undefined;
  for (const key in store) {
    if (store.hasOwnProperty(key)) {
      const element = store[key];
      if (element > max) {
        max = element;
        ingr = key;
      }
    }
  }
  return ingr;
}

function mostExpensiveIngredient(store) {
  // make it return the name of the most expensive ingredient
  // in the given store
  let max = 0;
  let ingr = undefined;
  for (const key in store) {
    if (store.hasOwnProperty(key)) {
      const element = store[key];
      if (element > max) {
        max = element;
        ingr = key;
      }
    }
  }
  return ingr;
}

function writeShoppingList(recipeList) {
  // it takes an array of recipes, and should return an object looking like a recipe,
  // but containing the quantities for all recipes in the list
}

function possibleRecipes(recipeList, store, sum) {
  // make it return a new recipeList (which is an array)
  // containing all recipes that we can afford to shop for
  // at the given store

}





// ************** TESTS (don't change anything here) ************

test(totalNumberOfIngredients, [
  [[superSoup], 9, "superSoup"],
  [[mazala], 6, "mazala"]
]);

test(mostExpensiveIngredient, [
  [[willys], "meat", "Willys"],
  [[ica], "chicken", "ica"],
]);

test(costOfRecipeInStore, [
  [[pie, coop], 38, "pie at coop"],
  [[mazala, ica], 40, "mazala at ica"],
]);

test(costOfRecipesInStore, [
  [[[pie], coop], 38, "pie at coop"],
  [[[pie, mazala], ica], 65, "pie and mazala at ica"],
]);

test(cheapestStoreForRecipe, [
  [[superSoup, allStores], "Willys", "superSoup among all stores"],
  [[pie, allStores], "ICA", "pie among all stores"],
]);

test(writeShoppingList, [
  [[[superSoup, pie]], {
    corn: 5,
    meat: 2,
    onion: 3,
    pea: 5,
    potato: 3,
  }, "superSoup and pie"],
  [[allRecipes], {
    chicken: 1,
    corn: 5,
    meat: 2,
    onion: 3,
    pea: 5,
    pepper: 2,
    potato: 3,
    tomato: 3
  }, "all recipes"],
]);

test(possibleRecipes, [
  [[allRecipes, ica, 35], [superSoup, pie], "35 at ICA"],
  [[allRecipes, coop, 5], [], "5 at COOP"]
]);

function test(func, tests) {
  console.log("\n********* Testing " + func.name + " **************");
  tests.forEach(function (test, n) {
    try {
      let result = func.apply({}, test[0]);
      if (typeof result === 'object' && !Array.isArray(result)) {
        result = Object.keys(result).sort().reduce((mem, key) => ({ ...mem, [key]: result[key] }), {});
        test[1] = Object.keys(test[1]).sort().reduce((mem, key) => ({ ...mem, [key]: test[1][key] }), {});
      }
      if (JSON.stringify(result) === JSON.stringify(test[1])) {
        console.log("...correctly returned", JSON.stringify(test[1]), "for", test[2]);
      } else {
        console.warn("...erroneously returned", JSON.stringify(result), "instead of", JSON.stringify(test[1]), "for", test[2]);
      }
    } catch (e) {
      console.log("...threw an error when testing for", test[2]);
      setTimeout(function () { throw e; }, 0);
    }
  });
  console.log("");
}