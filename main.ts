/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mark lutabi
 * Created on: Oct 2024
 * This program measures the distance from an object
*/

let distanceToObject:number = 0
//setup
basic.showIcon(IconNames.Happy)

// find the distance of the sonar
input.onButtonPressed(Button.A, function(){
    basic.clearScreen()
    distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})