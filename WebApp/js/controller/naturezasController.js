var naturezasController = function($scope, $mdToast, naturezaApi, toastUtil) {

  $scope.naturezas = [];

  $scope.listar = function() {
    naturezaApi.listar()
      .then(function(response) {
        $scope.naturezas = response.data;
      })
      .catch(function(error) {
        var toast = $mdToast.simple()
          .textContent("Problema para exibir a lista de naturezas.")
          .position('top right')
          .action('OK')
          .hideDelay(6000);
        $mdToast.show(toast);
      });
  };

  $scope.pesquisar = function(nome) {
    if (nome.length >= 3) {
      naturezaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.naturezas = response.data;
        })
        .catch(function(error) {
          var toast = $mdToast.simple()
            .textContent("Problema para exibir a lista de naturezas.")
            .position('top right')
            .action('OK')
            .hideDelay(6000);
          $mdToast.show(toast);
        });
    }
  };

  let limparBusca = function () {
        $scope.tipo = "";
        $scope.naturezas = [];
    };

  $scope.listar();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('NaturezasController', naturezasController);
