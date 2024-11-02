function showRecipe(recipeId) {
  const selectedRecipe = document.getElementById(recipeId);
  if (selectedRecipe.classList.contains('show')) {
      selectedRecipe.classList.remove('show');
  } else {
      const recipes = document.querySelectorAll('.recipe');
      recipes.forEach(recipe => {
          recipe.classList.remove('show');
      });
      selectedRecipe.classList.add('show');
  }
}
