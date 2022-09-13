import { defineStore } from 'pinia'

export const useTodoList = defineStore('counter', {
  state: () => {
    return {
      todoList: [],
      undoList: []
    }
  },
  actions: {
    addItem(value) {
      const newArr = JSON.parse(JSON.stringify(this.todoList));

      if (this.todoList.length > 1) {
        this.undoList.push(newArr)
        this.todoList.splice(0, 0, {
          note: value,
          checked: false,
          date: `${new Date}`
        });
      } else {
        this.todoList.push({
          note: value,
          checked: false,
          date: `${new Date}`
        });
      }
    },
    checkItem(indicator) {
      const newArr = JSON.parse(JSON.stringify(this.todoList));

      this.undoList.push(newArr)

      this.todoList.map(item => {
        if (indicator == item.date) {
          item.checked = true;
        }
        return item;
      });
    },
    removeItem(indicator) {
      const newArr = JSON.parse(JSON.stringify(this.todoList));

      this.undoList.push(newArr)
      this.todoList = this.todoList.filter(item => indicator != item.date)
    },
    unCheckItem(indicator) {
      const newArr = JSON.parse(JSON.stringify(this.todoList));

      this.undoList.push(newArr)

      this.todoList.map(item => {
        if (indicator == item.date) {
          item.checked = false;
        }
        return item;
      });
    },
    undoFunction() {
      if (this.undoList.length > 0) {
        (this.undoList.length === 0) ? 
        this.todoList = [...this.undoList[this.undoList.length]] :
        this.todoList = [...this.undoList[this.undoList.length - 1]];
        this.undoList.pop();
      }
    },
    initializeList(data){
      this.todoList = data;
    }
  },
})