"use strict";
function sandwich(...items) {
    console.log(`You ordered a sandwich with: ${items.join(', ')}`);
}
sandwich('ham', 'cheese', 'lettuce');
sandwich('turkey', 'bacon', 'tomato', 'mayo');
sandwich('peanut butter', 'jelly');
