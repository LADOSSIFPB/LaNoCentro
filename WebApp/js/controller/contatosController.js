var contatosController = function($scope, $mdToast, $mdDialog, contatoApi) {

  $scope.contatos = [];
  $scope.selectedContato = [];

  $scope.listar = function() {
    contatoApi.listar()
      .then(function(response) {
        $scope.contatos = response.data;
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
          .textContent("Problema para exibir a lista de empresas.")
          .position('top right')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      contatoApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.contatos = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  // Adicionar Dia de Refeição.
  $scope.atender = function(id) {

    let dialog = {
      controller: 'AtenderContatoController',
      templateUrl: 'view/administrador/modals/atender-contato.html',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false,
      locals: {
        idContato: id
      }
    };

    $mdDialog.show(dialog)
      .then(function(response) {})
      .catch(function(error) {})
      .finally(function() {
        limparBusca();
        $scope.listar();
      });
  }

  let limparBusca = function() {
    $scope.nome = "";
    $scope.contatos = [];
  };

  $scope.listar();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('ContatosController', contatosController);
