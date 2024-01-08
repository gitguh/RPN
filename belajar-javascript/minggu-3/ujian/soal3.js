// https://www.freecodecamp.org/news/filter-arrays-in-javascript/

function highestScore (students) {

  let result = {}

  if (students.length < 1) {
    return result
  }

  for (let i = 0; i < students.length; i++) {

    const student = students[i]

    // membuat obj dalam obj result dengan nama property sesuai dengan class students
    // result[student.class] = {}
    // console.log(result)

    const studentInfo = {
      name: student.name,
      score: student.score
    }

    if (result[student.class] === undefined) { 
      result[student.class] = studentInfo
    }

    // console.log(`sebelum perbandingan`, result)

    // console.log(student.score, result[student.class].score)

    if (student.score > result[student.class].score) {
      result[student.class] = studentInfo
    }

    // console.log(`setelah perbandingan`, result)

  }

  return result

}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 742,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}
