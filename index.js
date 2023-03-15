// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    return Math.abs(pickupLocation - headquarters);
  }
  
function distanceFromHqInFeet(pickupLocation) {
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
    return distanceInBlocks * feetPerBlock;
  }

function distanceTravelledInFeet(startBlock, endBlock) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    return distanceInBlocks * feetPerBlock;
  }


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination); // utilizing the distance travelled in feet function to determine the distance here
    let fare;

    if (distance <= 400){
        return fare = 0;
    } else if(distance > 400 && distance <= 2000){
        return fare = (distance - 400) * 0.02;
    } else if(distance > 2000 && distance <= 2500){
        return fare = 25;
    } else {
        return fare = 'cannot travel that far';
    }
  }