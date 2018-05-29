import { db } from '../db';

export const addRecipe = (recipeName, recipeText) => {
  db.ref('/recipes/').push({
    name: recipeName,
    text: recipeText
  });
}

export var recipeListRef = db.ref('recipes/');