import angular from 'angular';
import 'angular-ui-router';
import viewTable from './view';

export default angular.
  module( 'dogtreatsrus', ['ui.router', viewTable.name] );
