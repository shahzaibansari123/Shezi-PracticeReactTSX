// interface TodoItemType {
//   title: string;
//   readonly id: number;
//   isCompleted: boolean;
// }

import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  handleCompleted: (id: TodoItemType["id"]) => void;
  handleDelete: (id: TodoItemType["id"]) => void;
  handleEdit: (
    id: TodoItemType["id"],
    editedTitle: TodoItemType["title"]
  ) => void;
};

const TodoItem = ({
  todo,
  handleDelete,
  handleCompleted,
  handleEdit,
}: PropsType) => {
  const [editEnabled, setEditEnabled] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<TodoItemType["title"]>(
    todo.title
  );

  return (
    <Paper sx={{ padding: " 0.25rem 0rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        <Checkbox
          checked={todo.isCompleted}
          onChange={() => handleCompleted(todo.id)}
        />
        {editEnabled ? (
          <TextField
            sx={{ marginRight: "auto" }}
            variant="standard"
            value={editedValue}
            onChange={(e) => setEditedValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && editedValue !== "") {
                handleEdit(todo.id, editedValue);
                setEditEnabled(!editEnabled);
              }
            }}
          />
        ) : (
          <Typography sx={{ marginRight: "auto" }}>{todo.title}</Typography>
        )}
        <Button
          onClick={() => {
            setEditEnabled(!editEnabled), handleEdit(todo.id, editedValue);
          }}
        >
          {editEnabled ? "Done" : "Edit"}
        </Button>
        <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
