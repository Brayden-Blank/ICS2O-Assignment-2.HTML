// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: March 10 2022
// This file contains the JS functions for index.html

/**
 * This function gets users address number and street and shows it back to the user
 */
function enterClicked() {
  //input
  const sideLength = parseInt(document.getElementById("address-number").value)

  //output
  document.getElementById("area").innerHTML = 
    "<p>The area is: " + sideLength + " cm²" + streetName + "!<p>"
}