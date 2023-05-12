import { Spacer, useTheme } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({ }) => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: "flex",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "start",
      padding: '10px',
      backgroundColor: theme?.colors.gray100.value || "red"
    }}>

      <Link href={"/"}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image alt="icono de la app" width={70} height={70} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <Text color="white" h2>P</Text>
          <Text color="white" h3>okemon</Text>
        </div>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites">
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};

export default NavBar