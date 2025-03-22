// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,name){
return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase()});
}
findMatching(drivers,"Bobby")

function fuzzyMatch(drivers,letters){
return drivers.filter(function(driver){
    return driver.toLowerCase().startsWith(letters.toLowerCase())
})
}
function matchName(drivers,name){
    return drivers.filter(function(driver){
        return driver.name === name;
    })
}