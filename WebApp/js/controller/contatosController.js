var contatosController = function($scope, $mdToast, contatoApi) {

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

  $scope.detalharEmpresa = function (contato) {
      console.log("Detalhar Contato");
      console.log(contato);
  }

  let limparBusca = function () {
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
