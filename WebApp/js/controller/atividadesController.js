var atividadesController = function($scope, $mdToast, atividadeApi, toastUtil) {

  $scope.atividades = [];
  $scope.selectedContato = [];

  $scope.listar = function() {
    atividadeApi.listar()
      .then(function(response) {
        $scope.atividades = response.data;
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
          .textContent("Problema para exibir a lista de atividades.")
          .position('top right')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      atividadeApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.atividades = response.data;
        })
        .catch(function(error) {
          var toast = $mdToast.simple()
            .textContent("Problema para exibir a lista de atividades.")
            .position('top right')
            .action('OK')
            .hideDelay(6000);
          $mdToast.show(toast);
        });
    }
  };

  let limparBusca = function () {
        $scope.nome = "";
        $scope.atividades = [];
    };

  $scope.listar();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('AtividadesController', atividadesController);
