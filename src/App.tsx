import React, {useEffect, useState} from 'react';
import {Box, Center, Container, Text} from "@chakra-ui/react";
import Buttons from "./components/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store/store";
import {clearValue} from "./store/slices/inputSlice";
import NumberFormat from "react-number-format";
import {keyCheck} from "./components/keyBoard";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.value);

  useEffect(() => {
    if (value !== '') {
      switch (value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
          inputNum(value);
          dispatch(clearValue());
          break;
        case "+":
        case "/":
        case "-":
        case "x":
        case "=":
          operatorType(value);
          dispatch(clearValue());
          break;
        case "+/-":
          minusPlus();
          dispatch(clearValue());
          break;
        case "%":
          percent();
          dispatch(clearValue());
          break;
        case "C":
          reset();
          dispatch(clearValue());
          break;
        default:
          dispatch(clearValue());
          dispatch(clearValue());
      }

    }

  }, [value])

  const [preState, setPreState] = useState<any>("")
  const [curState, setCurState] = useState<any>("")
  const [input, setInput] = useState<any>("0")
  const [operator, setOperator] = useState("")
  const [total, setTotal] = useState(false)

  const inputNum = (e: any) => {
    if (curState.includes(".") && e === ".") return

    if (total) {
      setPreState("")
    }

    curState
      ? setCurState((pre: any) => pre + e)
      : setCurState(e);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState)
  }, [curState])

  useEffect(() => {
    setInput("0")
  }, [])

  const operatorType = (e: any) => {
    setTotal(false)
    setOperator(e)
    if (curState === "") return
    if (preState !== "") {
      equals(e)
    } else {
      setPreState(curState);
      setCurState("");
    }
  }

  const equals = (e: any) => {
    if (operator === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "x":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1))
    } else {
      setCurState("-" + curState)
    }
  }

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  }

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  }

  return (
    <div className="main-container" onKeyDown={(e: any) => keyCheck(e)}>
      <Center className="App">
        <Container
          className="calc"
          maxW={400}
          borderRadius={20}
        >
          {/*//table*/}
          <Box>
            <Box>
              <Text fontSize='2xl' textAlign="right">

              </Text>
            </Box>
            <Box>
              <Text fontSize='4xl' textAlign="right">
                {input !== "" || input === "0" ?
                  (<NumberFormat
                      value={input}
                      displayType={'text'}
                      thousandSeparator={true}/>
                  ) : (
                    <NumberFormat
                      value={preState}
                      displayType={"text"}
                      thousandSeparator={true}
                    />)}
              </Text>
            </Box>
          </Box>

          {/*  buttons   */}
          <Buttons>

          </Buttons>

        </Container>
      </Center>
    </div>

  );
};

export default App;
