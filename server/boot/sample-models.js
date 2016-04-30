module.exports = function(app) {
  var User = app.models.user;
  var users = [
    {
      username: 'scottsmeester',
      email: 'scott@smeester.com',
      password: 'password123'
    },
    {
      username: 'willydouglas',
      email: 'willy@weastcolfax.com',
      password: 'password123'
    },
    {
      username: 'devindeScenza',
      email: 'devin@weastcolfax.com',
      password: 'password123'
    },
    {
      username: 'ryanbird',
      email: 'ryan@weastcolfax.com',
      password: 'password123'
    }
  ]
  var Meal = app.models.meal;
  var meals = [
  {
    name: 'PB&J',
    description: 'This is the PB&J description'
  },
  {
    name: 'Plain Pizza',
    description: 'This is the  description'
  },
  {
    name: 'Chocolate Ice Cream',
    description: 'This is the Plain Pizza description'
  },
  {
    name: 'Apples and Peanut Butter',
    description: 'This is the  description'
  },
  {
    name: 'Swordfish',
    description: 'This is the Apples and Peanut Butter description'
  },
  {
    name: 'Deep Fried Mayonnaise',
    description: 'This is the Deep Fried Mayonnaise description'
  },
  {
    name: 'Fried Chicken',
    description: 'This is the Fried Chicken description'
  }
]

  var Food = app.models.food;
  var foods = 
  [
    {
      name: 'Bread',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Peanut Butter',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Jelly',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Apple',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Cheese',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Butter',
      protein: 20,
      fat: 70,
      carbs: 10
    },
    {
      name: 'Pasta',
      protein: 20,
      fat: 70,
      carbs: 10
    }
  ]

  User.create(users, function(err, users) {
    if (err) throw err;

    console.log('Created users:', users);
  });

  Meal.create(meals, function(err, meals) {
    if (err) throw err;

    console.log('Created meals:', meals);
  });

  Food.create(foods, function(err, foods) {
    if (err) throw err;

    console.log('Created foods:', foods);
  });

};