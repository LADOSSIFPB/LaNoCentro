/*
 *  Funções de gerenciamento do Toast.
 */
app.factory("toastUtil", function ($mdToast) {
    let position = "bottom right";
    let timeDelay = 10000;
    return {

        showErrorToast: function (error={}) {

            let mensagem = "Ocorreu um problema do NutrIF no Servidor, favor chamar o suporte.";
            let codigo = 0;

            if (error.data) {
                mensagem = error.data.mensagem;
                codigo = error.data.codigo;
            }

            $mdToast.show(
                $mdToast.simple()
                .textContent(mensagem)
                .position(position)
                .action('OK')
                .hideDelay(timeDelay)
            );

            return false;
        },
        showSuccessToast: function (message="") {

            $mdToast.show(
                $mdToast.simple()
                .textContent(message)
                .position(position)
                .action('OK')
                .hideDelay(timeDelay)
            );

            return true;
        },
        showToast: function (message="") {

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
