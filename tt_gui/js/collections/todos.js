// js/collections/todos.js
var app = app || {};
// Todo Collection
// ---------------
// The collection of todos is backed by *localStorage* ins
// server.
var TodoList = Backbone.Collection.extend({
// Reference to this collection's model.
model: app.Todo,
// Save all of the todo items under the `"todos-backbone
// Note that you will need to have the Backbone localSto
// loaded inside your page in order for this to work. If
// in the console without this present, comment out the 
// to avoid running into an exception.
localStorage: new Backbone.LocalStorage('todos-backbone'),
// Filter down the list of all todo items that are finis
completed: function() {
return this.filter(function( todo ) {
return todo.get('completed');
});
},
// Filter down the list to only todo items that are stil
remaining: function() {
// apply allowsus to define the context of this within o
return this.without.apply( this, this.completed() );
},
// We keep the Todos in sequential order, despite being 
// GUID in the database. This generates the next order n
nextOrder: function() {
if ( !this.length ) {
return 1;
}
return this.last().get('order') + 1;
},
// Todos are sorted by their original insertion order.
comparator: function( todo ) {
return todo.get('order');
}
});
// Create our global collection of **Todos**.
app.Todos = new TodoList();