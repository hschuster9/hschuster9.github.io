"use strict"

angular
.module("portfolio", [
  "ui.router"
])
.config([
  "$stateProvider",
  "$urlRouterProvider",
  RouterFunction
])
.controller("HomeIndexController", [
  "$state",
  HomeIndexControllerFunction
])
.controller("AboutController", [
  "$state",
  AboutControllerFunction
])
.controller("SkillsController", [
  "$state",
  SkillsControllerFunction
])
.controller("ProjectsController", [
  "$state",
  ProjectsControllerFunction
])
.controller("ContactController", [
  "$state",
  ContactControllerFunction
])

function RouterFunction($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('home', {
      url: "",
      templateUrl: "ng-views/home.html",
      controller: "HomeIndexController",
      controllerAs: "vm"
    })
    .state('about', {
      url: "/about",
      templateUrl: "ng-views/about.html",
      controller: "AboutController",
      controllerAs: "vm"
    })
    .state('skills', {
      url: "/skills",
      templateUrl: "ng-views/skills.html",
      controller: "SkillsController",
      controllerAs: "vm"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "ng-views/projects.html",
      controller: "ProjectsController",
      controllerAs: "vm"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "ng-views/contact.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
    $urlRouterProvider.otherwise("")
  }

function HomeIndexControllerFunction($state){

}

function AboutControllerFunction($state){

}

function SkillsControllerFunction($state){

}

function ProjectsControllerFunction($state){

}

function ContactControllerFunction($state){

}
