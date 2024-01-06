function changeMe(arr) {

  if (arr.length === 0) {
    console.log('""')
  }
  else {

    for (let i = 0; i < arr.length; i++) {

      const index = `${i + 1}. ${arr[i][0]} ${arr[i][1]}:`

      const person = {
        firstName: arr[i][0],
        lastName: arr[i][1],
        gender: arr[i][2]
      }

      if (arr[i][3]) {
        person.age = new Date().getFullYear() - arr[i][3]
      } else {
        person.age = "Invalid Birth Year"
      }
      
      console.log(index, person)

    }

  }

}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""
