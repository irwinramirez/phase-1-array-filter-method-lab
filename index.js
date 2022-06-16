// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array, string){
    return array.filter(function(drivers){
        return drivers.toLowerCase().indexOf(string.toLowerCase())!== -1
    })

}
function fuzzyMatch (array, string){
    return array.filter(function(drivers){
        return drivers.startsWith(string)
    })
}
function matchName (drivers, string){
    const result = drivers.filter(drivers => drivers.name === string)
    return result
}