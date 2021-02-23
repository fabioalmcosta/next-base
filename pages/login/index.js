import React, { useState } from 'react';
import {
  Icon,
  Input,
  Button,
  Checkbox,
  InputGroup,
  InputLeftElement,
  Center,
  Box,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaMoon, FaSun } from 'react-icons/fa';

const Component = () => {
  const [loading, setLoading] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode()
  const themeIcon = colorMode === 'light' ? FaMoon : FaSun;

  const onSubmit = (values) => {
    setLoading(!loading);
    console.log('Success:', values);
  };

  return (
    <>
      <IconButton
        position="absolute"
        right="0"
        margin="2em"
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Send email"
        icon={<Icon as={themeIcon} />}
      />
      <Center margin="auto" w="100%" h="100%">
        <Box
          w={['90%', '65%', '40%', '35%', '25%']}
          p={4}
          borderWidth="1px"
          borderRadius="lg"
        >
          <form name="basic" onSubmit={onSubmit}>
            <img
              src="https://picsum.photos/350/70"
              alt="Teste"
              width="100%"
              height="70px"
              style={{ marginBottom: '30px' }}
            />
            <InputGroup mt={2}>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaUserAlt} />}
              />
              <Input
                variant="outline"
                name="username"
                type="text"
                placeholder="Username"
                isRequired
              />
            </InputGroup>
            <InputGroup mt={2}>
              <InputLeftElement
                pointerEvents="none"
                children={<Icon as={FaLock} />}
              />
              <Input
                variant="outline"
                name="password"
                type="text"
                placeholder="Password"
                isRequired
              />
            </InputGroup>
            <Box mt={2}>
              <Checkbox name="remember" defaultIsChecked>
                Remember me
            </Checkbox>
              <Box float="right">
                <a href="localhost:3000/login">
                  Forgot password
              </a>
              </Box>
            </Box>
            <Button
              colorScheme="blue"
              variant="solid"
              isLoading={loading}
              mt={2}
              w="100%"
              type="submit"
            >
              Login
          </Button>
            <Box mt={2}>
              Or
            <a href="localhost:3000/login"> register now!</a>
            </Box>
          </form>
        </Box>
      </Center>
    </>
  );
};

export default Component;
