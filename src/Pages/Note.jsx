import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, deleteNotes, updateNotes } from "../Redux/action";
import {
  Box,
  HStack,
  VStack,
  Button,
  Text,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  // console.log("Notes: ", notes);

  const handleDeleteNote = (id) => {
    dispatch(deleteNotes(id));
    toast({
      title: "Deleted Note Successfully",
      status: "info",
      isClosable: true,
    });
  };

  const [editedNotes, setEditedNotes] = useState({
    id: "",
    title: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedNotes((values) => ({ ...values, [name]: value }));
    console.log(editedNotes);
  };

  const editNotes = (id) => {
    setEditedNotes({ id: id });
    onOpen();
  };

  const addUpdatedNoteHandler = () => {
    dispatch(updateNotes(editedNotes));
    toast({
      title: "Update Successfully",
      description: "Your note is updated now.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    navigate("/");
  };

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch, notes.length]);

  return (
    <Box style={{ marginTop: "25px", padding: "10px" }}>
      <Text fontSize="3xl" fontWeight="bold" textDecoration="underline">
        Your Notes
      </Text>
      <Box
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "15px",
          display: "grid",
          textAlign: "left",
        }}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
      >
        {notes.map((el, ind) => (
          <VStack
            key={ind}
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
              <Button
                onClick={() => editNotes(el.id)}
                colorScheme="cyan"
                fontWeight="bold"
              >
                Update
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalCloseButton />
                  <ModalBody>
                    {/* Input Title */}
                    <Box>
                      <ModalHeader
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "5px",
                        }}
                      >
                        Title:
                      </ModalHeader>
                      <Input
                        name="title"
                        type="text"
                        padding="2px 7px"
                        fontWeight="medium"
                        placeholder="Update Title ...."
                        onChange={handleOnChange}
                      />
                    </Box>

                    {/* Input description */}
                    <Box>
                      <ModalHeader
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          padding: "5px",
                        }}
                      >
                        Description:
                      </ModalHeader>
                      <Textarea
                        name="description"
                        size="sm"
                        fontSize="15px"
                        fontWeight="medium"
                        placeholder="Update Description ...."
                        onChange={handleOnChange}
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
                      onClick={addUpdatedNoteHandler}
                    >
                      Update Note
                    </Button>
                  </ModalBody>
                </ModalContent>
              </Modal>

              <Button
                colorScheme="red"
                fontWeight="bold"
                onClick={() => handleDeleteNote(el.id)}
              >
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
