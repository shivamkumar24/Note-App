import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, editNotes, deleteNotes } from "../Redux/action";
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
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Note = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [updateedTitle, setupdateedTitle] = useState("");
  const [updatedDescription, setupdatedDescription] = useState("");

  const dispatch = useDispatch();
  const notes = useSelector((store) => store.notes);
  // console.log("Notes: ", notes);

  const handleDeleteNote = (id) => {
    dispatch(deleteNotes(id));
  };

  const addUpdatedNoteHandler = (id) => {
    console.log(id);
    dispatch(
      editNotes(id, { title: updateedTitle, description: updatedDescription })
    );
    alert("Note Update SuccessFully.....");
    navigate("/");
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
              <>
                <Button onClick={onOpen} colorScheme="cyan">
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
                          type="text"
                          padding="2px 7px"
                          fontWeight="medium"
                          placeholder="Update Title ...."
                          onChange={(e) => setupdateedTitle(e.target.value)}
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
                          size="sm"
                          fontSize="15px"
                          fontWeight="medium"
                          placeholder="Update Description ...."
                          onChange={(e) =>
                            setupdatedDescription(e.target.value)
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
                        onClick={() => addUpdatedNoteHandler(el.id)}
                      >
                        Update Note
                      </Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </>
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
