import React, { createContext, PropsWithChildren, useContext } from "react";
import { TodoStore } from "./TodoStore";

type RootStateValue = {
  todoStore: TodoStore;
};
const RootStateContext = createContext<RootStateValue>({} as RootStateValue);

const todoStore = new TodoStore();

export const RootStateProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <RootStateContext.Provider value={{ todoStore }}>
      {children}
      
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStateContext);
