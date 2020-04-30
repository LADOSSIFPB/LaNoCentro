var empresasController = function($scope, $mdToast, empresaApi) {

  $scope.empresas = [];
  $scope.selectedEmpresa = [];

  $scope.listar = function() {
    empresaApi.listar()
      .then(function(response) {
        $scope.empresas = response.data;
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
      empresaApi.buscarPorNome(nome)
        .then(function(response) {
          $scope.empresas = response.data;
        })
        .catch(function(error) {

        });
    }
  };

  $scope.detalharEmpresa = function (empresa) {
      console.log("Detalhar Empresa");
      console.log(empresa);
  }

  let limparBusca = function () {
        $scope.nome = "";
        $scope.empresas = [];
    };

  $scope.listar();

  // Paginação da tabela.
  $scope.query = {
    order: 'nome',
    limit: 25,
    page: 1
  };
}

app.controller('EmpresasController', empresasController);
