import { TodosPayload } from "../../types";
import { Commit } from "vuex";

const todos = {
  namespaced: true as boolean,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  state: () => ({
    todos: [] as TodosPayload[],
  }),
  mutations: {
    CREATE_TODO(state: { todos: TodosPayload[] }, payload: TodosPayload): void {
      state.todos.push(payload);
    },
    MARK_TODO(state: { todos: TodosPayload[] }, payload: number): void {
      state.todos[payload].completed = !state.todos[payload].completed;
    },
    DELETE_TODO(state: { todos: TodosPayload[] }, payload: number): void {
      state.todos.splice(payload, 1);
    },
    CLEAR_TODOS(state: { todos: TodosPayload[] }, payload: string): void {
      if (payload === "all") {
        state.todos = [] as TodosPayload[];
        return;
      }
      const status = payload === "uncompleted" ? false : true;
      const selectedTasks = [] as number[]
      state.todos.forEach((t, index) => {
        if (t.completed === status) {
          selectedTasks.push(index);
        }
      });
      for (let index = selectedTasks.length - 1; index >= 0; index--) {
        state.todos.splice(selectedTasks[index], 1);
      }
    },
  },
  actions: {
    deleteSingleTask({ commit }: { commit: Commit }, payload: number): void {
      commit("DELETE_TODO", payload);
    },
  },
  getters: {
    todos: (state: { todos: TodosPayload[] }): TodosPayload[] => state.todos,
    completedToDos: (state: { todos: TodosPayload[] }): TodosPayload[] =>
      state.todos.filter((todo) => todo.completed === true),
  },
};

export default todos;
