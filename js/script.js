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
      isError: false
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
      this.tasks.splice(index, 1)
    },
    textCrossed(){
      this.isDone = true;
      console.log(this.isDone)
      console.log("premuto")
    }
  }
}).mount("#app")