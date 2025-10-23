// 🧠 Objective:
// The goal of this assignment is to practice declaring, assigning, and accessing data in JavaScript Arrays.

// 📝 Reminder:
// Run your code using the command: node index.js

// ----------------------------------------------------------
// Part 1 [2 pts]
// ----------------------------------------------------------
// Create an array for each class with the following names:
let csRoster = ["angie","zahra", "valerie"]
let mathRoster = ["zion", "jayden" , "alex"]
let elaRoster= ["ashley", "brandon", "jay"]
let ssRoster = ["blake", "lindsay", "jordyn"]
let electivesRoster = ["quan", "lason", "jose"]
// csRoster, mathRoster, elaRoster, ssRoster, electivesRoster (5 arrays total)
// Each should contain 3 unique student names (you can make them up or use classmates)


csRoster.push("JP")
mathRoster.push("Arnold")
elaRoster.push("peach")
ssRoster.push("Laila")
electivesRoster.push("jayden")


// ----------------------------------------------------------
// Part 2 [2 pts]
// ----------------------------------------------------------
// Five new students enrolled at CSH: JP, Arnold, Peach, Laila, Jayden
// Use the push() method to add ONE of these students to each roster:
// Add JP → CS
// Add Arnold → Math
// Add Peach → ELA
// Add Laila → Social Studies
// Add Jayden → Electives






// ----------------------------------------------------------
// Part 3 [2 pts]
// ----------------------------------------------------------
// Jayden has unenrolled from CSH.
// Use an array method to remove Jayden from the electivesRoster.

electivesRoster.pop()



// ----------------------------------------------------------
// Part 4 [2 pts]
// ----------------------------------------------------------
// Create a new array named cshRosters that stores all class rosters in this order:
let cshRosters = [csRoster,mathRoster, elaRoster, ssRoster,electivesRoster]
// 0: csRoster
// 1: mathRoster
// 2: elaRoster
// 3: ssRoster
// 4: electivesRoster

console.log(cshRosters[3][1])





// Using ONLY cshRosters and list indexing, print the name of the
// second student in the ssRoster (index 3 in cshRosters)





// ✅ Done! 
