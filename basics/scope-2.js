// global (name)
//   local (name)
//     local
//   local

let name = 'mutasem';

if (true) {
  let name = 'mike';

  if (true) {
    name = 'jen';
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
