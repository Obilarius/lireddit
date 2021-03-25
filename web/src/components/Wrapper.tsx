import { Box } from "@chakra-ui/layout";

export interface WrapperProps {
  varient?: "small" | "regular";
}

const Wrapper: React.FC<WrapperProps> = ({ children, varient = "regular" }) => {
  return (
    <Box
      maxW={varient === "regular" ? "800px" : "400px"}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  );
};

export default Wrapper;
