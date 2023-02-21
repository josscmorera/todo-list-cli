const prompt = require('prompt-sync')();

let t = [];
let y = [];

while (true) {
  console.log('You have ' + t.length + ' to-do item(s).');
  console.log('1. Create a to-do item');
  console.log('2. Complete a to-do item');
  console.log('3. View to-do list');
  console.log('4. Exit');

  const z = prompt('Enter your choice (1-4): ');

  if (z === '1') {
    const nt = prompt('What is the title of your new to-do item? ');
    t.push(nt);
    y.push(false);
  } else if (z === '2') {
    if (t.length === 0) {
      console.log('There are no to-do items to complete!');
      prompt('Press Enter to go back.');
    } else {
      console.log('To-do items:');
      for (let i = 0; i < t.length; i++) {
        const status = y[i] ? '[complete]' : '[incomplete]';
        console.log((i + 1) + '. ' + status + ' ' + t[i]);
      }
      const n = prompt('Which to-do item would you like to complete? ') - 1;
      if (n < 0 || n >= t.length) {
        console.log('Invalid choice.');
        prompt('Press Enter to go back.');
      } else {
        y[n] = true;
      }
    }
  } else if (z === '3') {
    if (t.length === 0) {
      console.log('There are no to-do items to display!');
      prompt('Press Enter to go back.');
    } else {
      while (true) {
        console.log('Viewing to-do items:');
        console.log('1. View incomplete to-do items');
        console.log('2. View complete to-do items');
        console.log('3. Back');
        const v = prompt('What would you like to do? ');

        if (v === '1') {
          console.log('Incomplete to-do items:');
          let hasIncomplete = false;
          for (let i = 0; i < t.length; i++) {
            if (!y[i]) {
              console.log((i + 1) + '. [incomplete] ' + t[i]);
              hasIncomplete = true;
            }
          }
          if (!hasIncomplete) {
            console.log('You have no incomplete to-do items.');
          }
          prompt('Press Enter to go back.');
        } else if (v === '2') {
          console.log('Complete to-do items:');
          let hasComplete = false;
          for (let i = 0; i < t.length; i++) {
            if (y[i]) {
              console.log((i + 1) + '. [complete] ' + t[i]);
              hasComplete = true;
            }
          }
          if (!hasComplete) {
            console.log('You have no complete to-do items.');
          }
          prompt('Press Enter to go back.');
        } else if (v === '3') {
          break;
        } else {
          console.log('Invalid choice.');
          prompt('Press Enter to go back.');
        }
      }
    }
  } else if (z === '4') {
    break;
  } else {
    console.log('Invalid choice.');
    prompt('Press Enter to go back.');
  }
}

