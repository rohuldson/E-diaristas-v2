import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography } from "@mui/material";
import { FormElementsContainer } from "@styles/pages/index.style";

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />

      <FormElementsContainer>
        <TextFieldMask
          label={"Digite seu CEP"}
          mask={"99.999-999"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP inválido</Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>
      <UserInformation
        name={"Ronald S"}
        picture={"https://github.com/rohuldson.png"}
        rating={4}
        description={"São Paulo"}
      />
    </div>
  );
};

export default Home;
