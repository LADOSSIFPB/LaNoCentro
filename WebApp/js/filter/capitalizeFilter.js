/**
 * Filtro para capitalizar a primeira letra de cada palavra do texto.
 */
app.filter('capitalize', function() {
  return function(input) {
    return (angular.isString(input) && input.length > 0) ?
      input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
  }
});
