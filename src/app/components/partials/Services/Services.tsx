import { Card, Grid, Stack, Typography } from "@mui/material"
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

const Services = () => {
    return (
        <Stack bgcolor="#f7f9fd" padding="20px" paddingTop={5} paddingBottom={8}>
            <Stack flexDirection="row" display="flex" alignItems="center" justifyContent="center" paddingBottom="30px">
                <Stack><MoreHorizOutlinedIcon fontSize="large" sx={{ color: "#B80F05" }} /></Stack>
                <Stack component={Typography} variant="h5" fontWeight={700} fontSize="18px" color="#B80F05" sx={{ textDecoration: "underline" }}>
                    Services
                </Stack>
                <Stack><MoreHorizOutlinedIcon fontSize="large" sx={{ color: "#B80F05" }} /></Stack>
            </Stack>
            <Stack component={Typography} textAlign="center" variant="h5" fontWeight={700} paddingBottom="30px">
                COMMENT POUVONS-NOUS VOUS AIDER ?
            </Stack>
            <Stack component={Typography} textAlign="center" fontSize="18px" paddingBottom="60px">
                Dirigeant de start-up en freelance ou d’entreprise de plus de 30 salariés, vous souhaitez travailler avec un conseiller en finance & commerce, dynamique et expérimenté, nous pouvons vous aider.
                Nous proposons des options à votre convenance et à partir desquelles nous pouvons créer un programme complet autour du conseil, de la mise en place opérationnelle, de la formation et du coaching.
            </Stack>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={3} display="flex" sx={{ alignItems: "center", justifyContent: "center", }}>
                    <Card elevation={0} sx={{
                        alignItems: "center", display: "flex", flexDirection: "column", padding: "15px", flexGrow: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: "#B80F05",
                            color: 'white',
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                        },
                    }}>
                        <Stack fontSize={10}>
                            <AccountBalanceOutlinedIcon sx={{ fontSize: "80px", color: "#d4726c" }} />
                        </Stack>
                        <Stack component={Typography} variant="h6" fontWeight={700} paddingTop="10px" >
                            Finance & Fiscalité
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} display="flex" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Card elevation={0} sx={{
                        alignItems: "center", display: "flex", flexDirection: "column", padding: "15px", flexGrow: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: "#B80F05",
                            color: 'white',
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                        },
                    }}>
                        <Stack fontSize={10}>
                            <BusinessOutlinedIcon sx={{ fontSize: "80px", color: "#d4726c" }} />
                        </Stack>
                        <Stack component={Typography} variant="h6" fontWeight={700} paddingTop="10px">
                            Gestion d'entreprise
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} display="flex" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Card elevation={0} sx={{
                        alignItems: "center", display: "flex", flexDirection: "column", padding: "15px", flexGrow: 1, cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: "#B80F05",
                            color: 'white',
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                        },
                    }}>
                        <Stack fontSize={10}>
                            <ComputerOutlinedIcon sx={{ fontSize: "80px", color: "#d4726c" }} />
                        </Stack>
                        <Stack component={Typography} variant="h6" fontWeight={700} paddingTop="10px">
                            Informatique de Gestion
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={3} display="flex" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Card elevation={0} sx={{
                        alignItems: "center", display: "flex", flexDirection: "column", padding: "15px", flexGrow: 1,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: "#B80F05",
                            color: 'white',
                            '& .MuiSvgIcon-root': {
                                color: 'white'
                            },
                            boxShadow: '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
                        },
                    }}>
                        <Stack fontSize={10}>
                            <Diversity3OutlinedIcon sx={{ fontSize: "80px", color: "#d4726c" }} />
                        </Stack>
                        <Stack component={Typography} variant="h6" fontWeight={700} paddingTop="10px">
                            Formation & Coaching
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Services;