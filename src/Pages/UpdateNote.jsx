import {
  Box,
  Button,
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
import React from "react";

const UpdateNote = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            {/* Input Title */}
            <Box>
              <ModalHeader
                style={{ fontSize: "15px", fontWeight: "bold", padding: "5px" }}
              >
                Title:
              </ModalHeader>
              <Input
                type="text"
                padding="2px 7px"
                fontWeight="medium"
                placeholder="Update Title ...."
                // onChange={(e) =>
                //   setProductState({ type: "title", payload: e.target.value })
                // }
              />
            </Box>

            {/* Input description */}
            <Box>
              <ModalHeader
                style={{ fontSize: "15px", fontWeight: "bold", padding: "5px" }}
              >
                Description:
              </ModalHeader>
              <Textarea
                size="sm"
                fontSize="15px"
                fontWeight="medium"
                placeholder="Add Description ...."
                // onChange={(e) =>
                //   setProductState({ type: "description", payload: e.target.value })
                // }
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
              // onClick={addNoteHandler}
            >
              Add Note
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateNote;
