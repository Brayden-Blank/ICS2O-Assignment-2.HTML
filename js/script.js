// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets users address number and street and shows it back to the user
 */
function calculateClicked() {
  //input
  const length = parseInt(document.getElementById("length").value)
  const width = parseInt(document.getElementById("width").value)

  //process
  const area = (length * width)
  
  //output
  document.getElementById("square-area").innerHTML = "<p>The area is: " + area + " cm²!<p>"
}