'use strict';

function sidebar($templateCache){

    $templateCache.put('partials/sidebar.tpl.html',
    '<div class="sidebar" role="navigation">\n'+
    '    <div class="sidebar-nav navbar-collapse">\n'+
    '        <ul class="nav in" id="side-menu">\n'+
    '            <li uib-dropdown ui-sref-active="active" ng-repeat="o in opciones">\n'+
    '                <menu-link ng-if="o.opciones.length === 0" opcion="o"></menu-link>\n'+
    '                <menu-toggle ng-if="o.opciones.length > 0" collapsed="collapsed" ng-click="check(o.id)" item-number="{{o.id}}" opcion="o"></menu-toggle>\n'+
    '            </li>\n'+
    '            <li ng-if="opciones.length === 0">\n'+
    '                Sin opciones disponibles.\n'+
    '            </li>\n'+
    '    </div>\n'+
    '</div>\n'+
    '');

    return {
        restrict: 'AE',
        templateUrl: 'partials/sidebar.tpl.html'
    };
}

angular
.module('inspinia')
    .directive('sidebar', sidebar);
