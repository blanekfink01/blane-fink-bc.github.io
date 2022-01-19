// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.gi
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./blane-fink-bc.github.io/projects/let-s-get-functional
 *    in the workspace directory will test the code
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = (customers) => {
    return _.filter(customers, cust => cust.gender === 'male').length;
};

var femaleCount = (customers) => {
    return _.filter(customers, cust => cust.gender === 'female').length;
};
var oldestCustomer = (customers) => {
    let oldest = customers[0];
    _.each(customers, customer => {
        if (customer.age > oldest.age) {
            oldest = customer;
        }
    });
    return oldest.name;
};

var youngestCustomer = (customers) => {
    let youngest = customers[0];
    _.each(customers, customer => {
        if (customer.age < youngest.age) {
            youngest = customer;
        }
    });
    return youngest.name;
};

var averageBalance = (customers) => {
    const allBals = [];
    _.each(customers, (customer) => {
        // parse a balance number then push to allBals as a number
        // ex: "$1,253.63" to 1253.63
        // string.match(regex)
        let nums = customer.balance.match(/[0-9-.]/g).join(''); // string with only number digits
        nums = parseFloat(nums); // numberfies it
        allBals.push(nums);
    });
    const total = _.reduce(allBals, (memo, num) => memo + num, 0); // = allBals.reduce
    return total / allBals.length;
};

var firstLetterCount = (customers, lett) => {
    return _.reduce(customers, (prev, customer) => {
        if (customer.name[0].toLowerCase() === lett.toLowerCase()) {
            return prev + 1
        } else {
            return prev;
        }
    }, 0)
};

var friendFirstLetterCount = (customers, name, lett) => {
    // customers is data, name is name of the person who's friends we're testing
    // let's find the object with the matching name
    let person = _.filter(customers, customer => customer.name === name)[0]; // should find our obj
    // then let's pass the array of friends to firstLetterCount
    return firstLetterCount(person.friends, lett);
};

var friendsCount = (customers, name) => {
    // if a customer has a "name" in their friends list, push their name to an array of friends
    const friends = []
    _.each(customers, customer => {
        _.each(customer.friends, (friend) => friend.name === name ? friends.push(customer.name) : false);
    });
    return friends;
};

var topThreeTags = (customers) => {
    const tags = {};
    _.each(customers, (customer) => {
        _.each(customer.tags, tag => {
            if (tags[tag] === undefined) { // if the tag in tags doesnt exist, add it, else, add to it
                return tags[tag] = 0;
            } else {
                return tags[tag] = tags[tag] + 1;
            }
        })
    });
    // convert tags to an array like [[tag1, 34], [tag2, 14]] .map.sort.slice
    return _.map(Object.keys(tags), (tag) => {
        return [tag, tags[tag]];
    }).sort((x, y) => y[1] - x[1]).map(arr => arr[0]).slice(0, 3);
};

var genderCount = (data) => {
    const count = {'female': 0, 'male': 0, 'non-binary': 0 };
    _.each(data, (customer) => {
        if (customer.gender === 'male') {
            count.male += 1;
        } else if (customer.gender === 'female') {
            count.female += 1;
        } else {
            count['non-binary']++;
        }
    });
    return count;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;