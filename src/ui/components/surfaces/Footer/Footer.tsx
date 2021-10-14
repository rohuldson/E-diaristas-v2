import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{maxWidth: '400px'}}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            vitae alias laboriosam, fuga itaque porro, tenetur, obcaecati dicta
            dolore incidunt inventore praesentium sunt nulla excepturi nemo!
            Asperiores est consequuntur id!
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nossos Apps</FooterTitle>

          <AppList>
            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img src={"/img/logos/app-store.png"} alt={"App store logo"} />
              </a>
            </li>

            <li>
              <a href={"/"} target={"_blank"} rel={"noopener noreferrer"}>
                <img
                  src={"/img/logos/google-play.png"}
                  alt={"Play store logo"}
                />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
