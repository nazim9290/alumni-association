import { Container, Grid, Paper } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TechTeam = () => {
  return (
    <Box component="div" sx={{ bgcolor: "info.main", p: 3 }}>
      <Container>
        <Box component="h2" color="white">
          Tech Team
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ mb: 3 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Box component="div" sx={{ height: "100%" }}>
                  <img
                    src="http://nmphsaabd.org/wp-content/uploads/2020/07/blog3.png"
                    alt=""
                    width="100%"
                  />
                </Box>
                <br />
                <Typography variant="h6" component="div">
                  ডা: মোহাম্মদ মেহেদী হাসান মজুমদার
                </Typography>
                <br />
                <Typography variant="h6" component="div">
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

export default TechTeam;
