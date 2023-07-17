import { CardMedia, Grid, Stack, Typography } from "@mui/material"

const Presentation = () => {
    return (
        <Stack className="presentation" padding="40px" style={{ background: "linear-gradient(90deg, rgba(184,15,5,1) 0%, rgba(245,230,231,1) 100%)" }} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} display="flex" sx={{ alignItems: "center" }}>
                    <Stack>
                        <Stack>
                            <Stack component={Typography} fontWeight="bolder" fontSize="14px" letterSpacing="1px" textAlign="center">QUI SOMMES NOUS ?</Stack>
                        </Stack>
                        <Stack>
                            <Stack component={Typography} fontWeight="bolder" fontSize="36px" sx={{ lineHeight: { xs: "75px", sm: "100px", md: "75px", lg: "200px" } }} lineHeight="100px" textAlign="center">DÉDIÉS À VOTRE ÉVOLUTION !</Stack>
                        </Stack>
                        <Stack>
                            <Stack component={Typography} fontWeight="400" fontSize="18px" textAlign="center">Qu’il s’agisse d’entrepreneuriat, de gestion d’entreprise ou de projets personnels nécessitant un accompagnement personnalisé, nous nous assurons de répondre présent à tout moment.</Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6} display="flex" sx={{ justifyContent: "center", alignItems: "center" }}>
                    <Stack>
                        <CardMedia component="img" image={"https://i0.wp.com/kheopsbusinessconsulting.fr/wp-content/uploads/2022/04/sans-titre-e1650448429513.png?fit=5172%2C3453&ssl=1"} />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>

    )
}

export default Presentation;