import { Card, Grid, Row } from "@nextui-org/react";
import { Text } from "@nextui-org/react";
import { SmallPokemon } from "../../../interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} lg={1} >
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image  alt={pokemon.name} height={140} src={pokemon.img} />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text transform='capitalize' color="white">{pokemon.name}</Text>
            <Text color="white">#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonCard