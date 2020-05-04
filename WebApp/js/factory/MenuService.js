/*
 *  Mapeamento dos serviço do Menu.
 */
app.factory("menu", function($location, $rootScope) {

  let sections = {
      "admin": [
        {
          name: 'Home',
          state: 'administrador.home',
          type: 'link'
        },
        {
          name: 'Empresas',
          state: 'administrador.empresas',
          type: 'link'
        },
        {
          name: 'Contatos',
          state: 'administrador.contatos',
          type: 'link'
        },
        {
          name: 'Atividades',
          state: 'administrador.atividades',
          type: 'link'
        }
      ]
    };
var self;

return self = {

  toggleSelectSection: function(section) {
    self.openedSection = (self.openedSection === section ? null : section);
  },

  isSectionSelected: function(section) {
    return self.openedSection === section;
  },

  selectPage: function(section, page) {
    page && page.url && $location.path(page.url);
    self.currentSection = section;
    self.currentPage = page;
  },

  getSectionsByUserRole: function() {
    // let roles = userService.getUser().roles;
    // Fixado nome do perfil do usuário.
    return sections["admin"];
  }
};

function sortByHumanName(a, b) {
  return (a.humanName < b.humanName) ? -1 :
    (a.humanName > b.humanName) ? 1 : 0;
}
});
