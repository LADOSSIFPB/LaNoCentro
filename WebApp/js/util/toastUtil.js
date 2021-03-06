/*
 *  Funções de gerenciamento do Toast.
 */
app.factory("toastUtil", function($mdToast) {
  let position = "bottom right";
  let timeDelay = 10000;
  return {

    showErrorToast: function(message = {}) {

      var keys = Object.keys(message);
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        $mdToast.show(
          $mdToast.simple()
          .textContent(message[key])
          .position(position)
          .action('OK')
          .hideDelay(timeDelay)
        );
      }

      return false;
    },
    showSuccessToast: function(message = "") {

      $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position(position)
        .action('OK')
        .hideDelay(timeDelay)
      );

      return true;
    },
    showToast: function(message = "") {

      $mdToast.show(
        $mdToast.simple()
        .textContent(message)
        .position(position)
        .action('OK')
        .hideDelay(timeDelay)
      );

      return true;
    },
    showErrosValidation: function(errors) {
      for (mensagem of errors) {
        var toast = $mdToast.simple()
          .textContent(mensagem)
          .position(position)
          .action('OK')
          .hideDelay(timeDelay);
        $mdToast.show(toast);
      }
    }
  }
});
