import angular from 'angular';
import TableController from './tableController';
import tableStateProvider from './tableStateProvider';

export default angular.
  module( 'tableModule', [] )
  .config(tableStateProvider)
  .controller('TableController', TableController);
