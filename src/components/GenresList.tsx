import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/imag-url";
import useGameQueryStore from "../store";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Box marginY={10}>
        <Heading fontSize="2xl" marginBottom={3}>
          Genres
        </Heading>
        <List>
          {data?.results.map((genre) => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  whiteSpace={"normal"}
                  textAlign="left"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
};

export default GenresList;
