import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import theme from "../theme/theme";
import { Router } from "../router/Router";

export default function App() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isMounted ? <Router /> : null}
    </ChakraProvider>
  );
}
