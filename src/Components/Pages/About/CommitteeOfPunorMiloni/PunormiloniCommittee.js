import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const PunormiloniCommittee = () => {
  const [pmCommittee, setPmCommittee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pmCommittee")
      .then((res) => res.json())
      .then((data) => setPmCommittee(data));
  }, []);
  console.log(pmCommittee);
  return (
    <Box component="div" sx={{ bgcolor: "info.main", p: 3 }}>
      <Container>
        <Box component="h2" color="white">
          Punormiloni Committee
        </Box>
        <Grid
          container
          spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 3 }}
        >
          {pmCommittee.map((pm, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={pm.img} alt="" width="100%" />

                <Typography sx={{ mt: 2 }} variant="h6" component="div">
                  ডা: মোহাম্মদ মেহেদী হাসান মজুমদার
                </Typography>

                <Typography variant="body1" component="div">
                  মেডিকেল অফিসার, ঢাকা মেডিকেল কলেজ
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PunormiloniCommittee;
