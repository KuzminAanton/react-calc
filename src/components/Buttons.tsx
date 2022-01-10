import React from 'react';
import {Box, Button, Center, Grid, GridItem, Text} from "@chakra-ui/react";
import {useDispatch} from "react-redux";
import {changeValue} from "../store/slices/inputSlice";

const Buttons: React.FC = () => {
  const buttonHeight = 70;
  const buttonWidth = 70;
  const buttonBorderRadius = "50%";
  const dispatch = useDispatch()

  return (
    <Box mb={30} mt={30}>
      <Grid
        templateRows='repeat(6, 1fr)'
        templateColumns='repeat(4, 1fr)'
        gap={4}
      >
        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("C"))}
            >
              <Text>C</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("("))}
            >
              <Text>(</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue(")"))}
            >
              <Text>)</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("x"))}
            >
              <Text>x</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("+/-"))}
            >
              <Text>+/-</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("%"))}
            >
              <Text>%</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              disabled
            >
              <Text>^^</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("/"))}
            >
              <Text>/</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("7"))}
            >
              <Text>7</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("8"))}
            >
              <Text>8</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("9"))}
            >
              <Text>9</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("-"))}
            >
              <Text>-</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("4"))}
            >
              <Text>4</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("5"))}
            >
              <Text>5</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("6"))}
            >
              <Text>6</Text>
            </Button>
          </Center>

        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("+"))}
            >
              <Text>+</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("1"))}
            >
              <Text>1</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("2"))}
            >
              <Text>2</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("3"))}
            >
              <Text>3</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem rowSpan={2}>
          <Center className="big-button">
            <Button
              className="button-f"
              height={buttonHeight * 2}
              width={buttonWidth}
              borderRadius={30}
              onClick={()=> dispatch(changeValue("="))}
            >
              <Text>=</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("."))}
            >
              <Text>.</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("0"))}
            >
              <Text>0</Text>
            </Button>
          </Center>
        </GridItem>

        <GridItem>
          <Center>
            <Button
              className="button-f"
              height={buttonHeight}
              width={buttonWidth}
              borderRadius={buttonBorderRadius}
              onClick={()=> dispatch(changeValue("<="))}
            >
              <Text>{"<="}</Text>
            </Button>
          </Center>
        </GridItem>

      </Grid>
    </Box>
  );
};

export default Buttons;