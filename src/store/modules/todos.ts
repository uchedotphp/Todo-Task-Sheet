import { TodosPayload } from "../../types";

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
  },
  actions: {},
  getters: {
    todos: (state: { todos: TodosPayload[] }): TodosPayload[] => state.todos,
  },
};

export default todos;
