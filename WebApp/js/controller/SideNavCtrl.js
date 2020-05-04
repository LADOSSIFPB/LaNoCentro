/*
 *  Controlar ações do SideNav.
 */
app.controller("sideNavCtrl", function ($mdMedia, $mdSidenav, $state,
  $scope) {

    this.isOpened = true;

    this.title = $state.current.title;

    // Logout
    this.logout = function () {
    }

    // Controlar abertura e fechamento do menu.
    this.openOrCloseSideNav = function () {
        console.log("Entrou no sideNav");
        if ($mdMedia('gt-md')) {
          this.isOpened = !this.isOpened;
        } else {
          $mdSidenav('sideNavId').toggle();
        }
    }
});
