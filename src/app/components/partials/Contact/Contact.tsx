import { Card, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import ComputerOutlinedIcon from '@mui/icons-material/ComputerOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';

const Contact = () => {

    function createData(
        days: string,
        hours: String,
    ) {
        return { days, hours };
    }

    const rows = [
        createData('Lundi', '9:00 - 18:00'),
        createData('Mardi', '9:00 - 18:00'),
        createData('Mercredi', '9:00 - 18:00'),
        createData('Jeudi', '9:00 - 18:00'),
        createData('Vendredi', '9:00 - 18:00'),
        createData('Samedi', 'Fermé'),
        createData('Dimanche', 'Fermé'),
    ];

    return (
        <Stack paddingTop={5} paddingBottom={8} padding="20px">
            <Stack flexDirection="row" display="flex" alignItems="center" justifyContent="center" paddingBottom="30px">
                <Stack><MoreHorizOutlinedIcon fontSize="large" sx={{ color: "#B80F05" }} /></Stack>
                <Stack component={Typography} variant="h5" fontWeight={700} fontSize="18px" color="#B80F05" sx={{ textDecoration: "underline" }}>
                    Contact
                </Stack>
                <Stack><MoreHorizOutlinedIcon fontSize="large" sx={{ color: "#B80F05" }} /></Stack>
            </Stack>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6} sx={{ alignItems: "center", justifyContent: "center", }}>
                    <Stack flexDirection="row" display="flex" sx={{ display: { xs: 'block', sm: 'flex' } }} alignItems="center" justifyContent="space-between" flexGrow={1}>
                        <Stack>
                            <Stack component={Typography} variant="h5" fontWeight={700}>
                                Coordonnées
                            </Stack>
                            <Stack component={Typography}>
                                06 52 35 91 59
                            </Stack>
                        </Stack>
                        <Stack>
                            <Stack component={Typography} variant="h5" fontWeight={700}>
                                Adresse
                            </Stack>
                            <Stack component={Typography}>
                                Rue de la Médoquine,
                                33400 Talence
                                France
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack paddingTop="40px">
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.days}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.days}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.hours}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} display="flex" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Stack flexGrow={1}>
                        <iframe src="https://maps.google.com/maps?q=rue%20de%20la%20m%C3%A9doquine%2C%20talence&t=m&z=12&output=embed&iwloc=near" style={{ border: 0 }} loading="lazy" height="688px" />
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Contact;