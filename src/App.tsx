// import Box from "./components/Box";

import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState } from "react";
import { Saving, Fetching } from "./utils/Saving";

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { StateType, decrement, increment, incrementByValue } from "./redux";

// import {  ReactNode, creatontext, useState } from "react";
// import ThemedBox from "./components/ThemedBox";eC

// function App() {
//   return (
//     <>
//       <Box heading="getting statrted props data">
//         <p>inner child jsx tsx</p>
//       </Box>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import Box from "./components/Box";

// function App() {
//   const [value, setValue] = useState<string>("");
//   return (
//     <>
//       <Box label="Search" value={value} setter={setValue} />
//     </>
//   );
// }

// export default App;

// --------------------------------------------------------------

// import { useState } from "react";

// interface Player {
//   name: string;
//   age: number;
// }

// function App() {
//   const [player, setPlayer] = useState<Player>();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(player, "ddnsknsdnkd");
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Player Name"
//           value={player?.name || ""}
//           onChange={(e) => setPlayer({ ...player!, name: e.target.value })}
//         />
//         <input
//           type="number"
//           placeholder="Player Age"
//           value={player?.age || ""}
//           onChange={(e) => setPlayer({ ...player!, age: e.target.value })}
//         />
//         <button type="submit">register</button>
//       </form>
//     </>
//   );
// }

// export default App;

// ----------------------------------------------------

// type Mode = "light" | "dark";

// type Palette = {
//   bg: string;
//   font: string;
// };

// interface ThemeType {
//   theme: Mode;
//   toggleTheme: () => void;
//   palette: Palette;
// }

// export const ThemeContext = createContext<ThemeType>({
//   theme: "light",
//   toggleTheme: () => {},
//   palette: {
//     bg: "white",
//     font: "black",
//   },
// });

// const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
//   const [theme, setTheme] = useState<Mode>("light");

//   const [palette, setPalette] = useState<Palette>({
//     bg: "white",
//     font: "black",
//   });

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));

//     if (theme === "dark") {
//       setPalette({ ...palette, bg: "white", font: "black" });
//       // setTheme('dark')
//     }

//     if (theme === "light") {
//       setPalette({ ...palette, bg: "black", font: "white" });
//       // setTheme('light')
//     }
//   };
//   // console.log(theme, "Ddfdfdffdf");

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, palette }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// function App() {
//   return (
//     <>
//       <ThemeProviderWrapper>
//         <ThemedBox />
//       </ThemeProviderWrapper>
//     </>
//   );
// }

// export default App;

// __________________________________________________________________________

// usereducer hook

// import { useReducer } from "react";

// type StateType = {
//   count: number;
// };

// type ActionType =
//   | { type: "Increment"; payload: number }
//   | { type: "Decrement"; payload: number };

// const intialState: StateType = {
//   count: 0,
// };

// const reducer = (state: StateType, action: ActionType): StateType => {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + action.payload };
//     case "Decrement":
//       return { count: state.count - action.payload };

//     default:
//       return state;
//   }
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, intialState);

//   const Increment=(): void=>{
//     dispatch({type: 'Increment', payload:  1})
//   }

//   const Decrement=(): void=>{
//     dispatch({type: 'Decrement', payload:  1})
//   }
//   return <>
//   <button onClick={Decrement}>-</button>
//   <p>Count : {state.count}</p>
//   <button onClick={Increment}>+</button>
//   </>;
// }

// export default App;

// ---------------------------------------------------------------

// function App() {
//   const [value, setValue] = useState<number>(0);

//   const dispatch = useDispatch();
//   const state = useSelector((state: StateType) => state.count);

//   const handleAddValue = () => {
//     dispatch(incrementByValue(value));
//   };

//   return (
//     <>
//       <p>Count : {state}</p>
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//       <input
//         type="number"
//         value={value}
//         onChange={(e) => setValue(Number(e.target.value))}
//       />
//       <button disabled={value < 0} onClick={handleAddValue}>
//         Add Value
//       </button>
//     </>
//   );
// }

// export default App;

// const todos=[

// ]

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>(Fetching());

  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const handleAddTodos = (): void => {
    const newTodo = {
      title,
      isCompleted: false,
      id: Math.random() * 100,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };
  const handleCompletedTodo = (id: TodoItemType["id"]): void => {
    const completedTodo: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;
      return item;
    });
    console.log(completedTodo, "Dsdbsjdfbkfjb");
    setTodos(completedTodo);
  };
  const handleDeleteTodo = (id: TodoItemType["id"]): void => {
    const completedTodo: TodoItemType[] = todos.filter(
      (item) => item.id !== id
    );
    setTodos(completedTodo);
    console.log(completedTodo, "Dsdbsjdfbkfjb");
  };
  const handleEditTodo = (
    id: TodoItemType["id"],
    editedTitle: TodoItemType["title"]
  ): void => {
    const editedTodo: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.title = editedTitle;
      return item;
    });
    console.log(editedTodo, "Dsdbsjdfbkfjb");
    setTodos(editedTodo);
  };

  useEffect(() => {
    Saving(todos);
  }, [todos]);

  return (
    <Container maxWidth="xs" sx={{ height: "100vh"}}>
      <AppBar position="static">
        <Toolbar>
          <Typography>TODO WITH TSX</Typography>
        </Toolbar>
      </AppBar>

      <Stack
        height={"70%"}
        direction={"column"}
        spacing={"1rem"}
        p={"1rem"}
        sx={{ overflowY: "scroll" }}
      >
        {todos?.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            handleDelete={handleDeleteTodo}
            handleCompleted={handleCompletedTodo}
            handleEdit={handleEditTodo}
          />
        ))}
      </Stack>

      <TextField
        label="Add Task"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && title !== "") handleAddTodos();
        }}
      ></TextField>
      <Button
        fullWidth
        variant="contained"
        sx={{ margin: "1rem 0" }}
        onClick={handleAddTodos}
        disabled={title === ""}
      >
        {" "}
        ADD
      </Button>
    </Container>
  );
}

export default App;
