const {createApp} = Vue;

createApp({

  data(){
    return{
      tasks:[
        {
          text: "Fare la spesa",
          isDone: false
        },
        {
          text: "Studiare Vue",
          isDone: false
        },
        {
          text: "Comprare la pappa dei gatti",
          isDone: false
        }
      ],
      newTask:
      {
        text: "",
        isDone: false
      },
      isError: false,
      isNotDone: false
    }
  },
  methods:{
    addTask(){
      if(this.newTask.length < 5){
        this.isError = true;
      }else{
        this.tasks.unshift(this.newTask);
        this.newTask = ""
        this.isError = false;
      }
    },
    removeTask(index){
      if(this.tasks[index].isDone){
        this.isNotDone = false;
        this.tasks.splice(index, 1)
      }else{
        console.log("completa prima la task")
        this.isNotDone = true;
      }
    }
  }
}).mount("#app")