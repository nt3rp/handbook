var Model = window.Model = Backbone.Model.extend({
    defaults: {}
});

var Note = window.Note = Model.extend({
    defaults: {
        title: "Title",
        content: "Content"
    }
});
