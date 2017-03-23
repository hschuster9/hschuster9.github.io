"use strict"

angular
.module("portfolio", [
  "ui.router"
])
.config([
  "$stateProvider",
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
.controller("WorkController", [
  "$state",
  WorkControllerFunction
])
.controller("ContactController", [
  "$state",
  ContactControllerFunction
])

function RouterFunction($stateProvider){
  $stateProvider
    .state('home', {
      url: "/",
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
    .state('work', {
      url: "/work",
      templateUrl: "ng-views/work.html",
      controller: "WorkController",
      controllerAs: "vm"
    })
    .state("contact", {
      url: "/contact",
      templateUrl: "ng-views/contact.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
  }

function HomeIndexControllerFunction($state){

}

function AboutControllerFunction($state){

}

function SkillsControllerFunction($state){

}

function WorkControllerFunction($state){

}

function ContactControllerFunction($state){

}
