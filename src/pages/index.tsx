import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container, CircularProgress } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "@styles/pages/index.style";

import useIndex from "data/hooks/pages/useIndex.page";

const Home: NextPage = () => {
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    diaristasRestantes,
    buscaFeita,
    carregando,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade."
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            label={"Digite seu CEP"}
            mask={"99.999-999"}
            fullWidth
            variant={"outlined"}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {erro && <Typography color={"error"}>{erro}</Typography>}

          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
            disabled={!cepValido || carregando}
            onClick={() => buscarProfissionais(cep)}
          >
            {carregando ? <CircularProgress size={20} /> : " Buscar"}
          </Button>
        </FormElementsContainer>

        { buscaFeita  && 
        ( diaristas.length > 0 ?
          <ProfissionaisPaper>
            <ProfissionaisContainer>
              
              {diaristas.map((item, index) => {
                return (
                  <UserInformation
                  key={index}
                    name={item.nome_completo}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}
                  />
                );

              })};
            </ProfissionaisContainer>

            <Container  sx={{textAlign: 'center'}}>
              {diaristasRestantes > 0 && (
              <Typography sx={{mt: 5}}>
              ... e mais {diaristasRestantes}{' '}{diaristasRestantes > 1 ? 'profissionais atendem' : 'profissional atende'}{' '} ao seu endereço.
              </Typography>

              )}
            <Button variant={'contained'} color={'secondary'} sx={{mt: 5}}>Contratar um profissional</Button>
            </Container>
          </ProfissionaisPaper>
          :
          (
            <Typography sx={{mb: 8}}align={'center'} color={'textPrimary'}>Ainda não temos nenhuma profissional disponível neste CEP.</Typography>
          )
        )}
      </Container>
    </div>
  );
};

export default Home;
