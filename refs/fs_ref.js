const fs = require('fs')
const path = require('path')

// File system

// fs.mkdir(path.join(__dirname, 'notes'), err=>{
//   if (err) throw new Error(err)

//   console.log('Папка была создана');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw new Error(err)
//     console.log('File was cerated');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' Append file',
//       (err) => {
//         if (err) throw new Error(err)
//         console.log('File was appended');

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw new Error(err)
//             console.log(data)      
//           }
//         )
//       }
//     )
//   }
// )

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw new Error(err)

    console.log('File renamed')
  }
)