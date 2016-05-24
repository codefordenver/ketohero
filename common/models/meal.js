module.exports = function(Meal) {
  Meal.addMeal = function(userId, mealName, mealDesc, foods, cb) {
    var response;
    var newMeal = {
      userId: userId, 
      name: mealName, 
      description: mealDesc, 
      foods: foods}

    var models = Meal.app.Models;

    console.log('models', models);

    Meal.create(newMeal, function(err, meal){
      if (err) {
        return cb(err);
      }
      cb(null, meal)
    })
  }
  Meal.remoteMethod('addMeal', {
    accepts: [
      {arg: 'userId', type: 'number'},
      {arg: 'name', type:'string'},
      {arg: 'description', type: 'string'},
      {arg: 'foods', type: 'array'}],
    returns: {arg: 'addMeal', type: 'string'}
  })
};
