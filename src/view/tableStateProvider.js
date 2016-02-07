const annotation = ['$stateProvider'];

function tableStateProvider($stateProvider) {
  console.log('state provider');
  $stateProvider.
    state('tableView', {
      url: '/view',
      views: {
          'content@': {
              templateUrl: 'view/tableView.html',
              controller: 'TableController as tableController'
          }
      }
    });
}

tableStateProvider.$inject = annotation;
export default tableStateProvider;
