import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, deleteNotes } from "../Redux/action";
import { Box, HStack, VStack, Button, Text } from "@chakra-ui/react";

const Note = () => {
  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  // console.log("Notes: ", notes);

  const handleDeleteNote = (id) => {
    dispatch(deleteNotes(id));
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch, notes.length]);

  return (
    <Box style={{ marginTop: "25px" }}>
      <Text fontSize="2xl" fontWeight="bold">
        Your Notes
      </Text>
      <Box
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "15px",
          display: "grid",
        }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {notes.map((el) => (
          <VStack
            style={{
              padding: "15px",
              margin: "10px",
              border: "1px solid red",
              borderRadius: "12px",
              alignItems: "start",
            }}
          >
            <h2>
              <span style={{ fontWeight: "bold" }}>Title: </span>
              {el.title}
            </h2>
            <h3>
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {el.description}
            </h3>
            <HStack>
              <Button colorScheme="cyan">Update</Button>
              <Button colorScheme="red" onClick={() => handleDeleteNote(el.id)}>
                Delete
              </Button>
            </HStack>
          </VStack>
        ))}
      </Box>
    </Box>
  );
};

export default Note;
