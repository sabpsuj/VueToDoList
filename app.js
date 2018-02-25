var card = new Vue({
    el: '#card',
    data: {
        title: "Things To Do",
        items: [
            {text: "Learn JavaScript"},
            {text: "Learn Vue"},
            {text: "Relax"}
        ]
    },
    methods: {
        addItem: function(){
            var input = document.getElementById('itemForm');

            if(input.value !== ''){
                this.items.push({
                    text: input.value
                })
                input.value = '';
            }
        },
        deleteItem: function(index){
            this.items.splice(index, 1);
        },
        doneItem: function(event){
         var button = event.target;
         //console.log(button);
         var thisTask = button.parentElement;
         //console.log(thisTask);
         thisTask.classList.toggle('done');
            }
    },
    computed: {
        totalToDos: function(){
          return this.items.length;
        }
    }
});