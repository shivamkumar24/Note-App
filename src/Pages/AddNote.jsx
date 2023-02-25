import React, { useReducer } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../Redux/action";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";

const initialState = {
  title: "",
  description: "",
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

const AddNote = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [productState, setProductState] = useReducer(
    reducerFunction,
    initialState
  );

  const addNoteHandler = () => {
    if (JSON.stringify(productState) !== JSON.stringify(initialState)) {
      dispatch(addNotes(productState)).then(() => {
        toast({
          title: "Added Successfully",
          description: "Your new note is added now.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      });
    }
  };

  return (
    <FormControl
      width={{ base: "80%", md: "50%", lg: "50%" }}
      style={{
        margin: "auto",
        padding: "20px",
        marginTop: "20px",
        border: "1px solid black",
        borderRadius: "15px",
      }}
    >
      {/* Input Title */}
      <Box>
        <FormLabel
          style={{ fontSize: "15px", fontWeight: "bold", padding: "5px" }}
        >
          Title:
        </FormLabel>
        <Input
          type="text"
          padding="2px 7px"
          fontWeight="medium"
          placeholder="Add Title ...."
          onChange={(e) =>
            setProductState({ type: "title", payload: e.target.value })
          }
        />
      </Box>

      {/* Input description */}
      <Box>
        <FormLabel
          style={{ fontSize: "15px", fontWeight: "bold", padding: "5px" }}
        >
          Description:
        </FormLabel>
        <Textarea
          size="sm"
          fontSize="15px"
          fontWeight="medium"
          placeholder="Add Description ...."
          onChange={(e) =>
            setProductState({ type: "description", payload: e.target.value })
          }
        />
      </Box>

      {/* Button */}
      <Button
        style={{
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",

          fontWeight: "bold",
          padding: "4px 8px",
          marginTop: "15px",
          borderRadius: "12px",
        }}
        colorScheme="teal"
        variant="outline"
        onClick={addNoteHandler}
      >
        Add Note
      </Button>
    </FormControl>
  );
};

export default AddNote;
