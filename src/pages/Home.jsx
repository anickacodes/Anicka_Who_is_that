import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardMedia, CardActionArea } from "@mui/material";
import ghLogo from "../data/github-mark.png";
import igLogo from "../data/iglogo.jpg";
import ltLogo from '../data/LinktreeLogo.webp';

const Home = () => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const items = [
    {
      id: "gh",
      href: "https://github.com/anickacodes",
      text: "AnickaCodes",
      hoverText: "Visit My GitHub!",
      icon: ghLogo,
    },
    {
      id: "ig",
      href: "https://www.instagram.com/clnstylez_/",
      text: "CLNStylez_",
      hoverText: "Follow Me on Instagram!",
      icon: igLogo,
    },
    {
      id: "lt",
      href: "https://linktr.ee/Nickistylez",
      text: "Bellisima",
      hoverText: "Check Out My Linktree!",
      icon: ltLogo,
    },
  ];

  return (
    <Box
      sx={{
        textAlign: "center",
        p: 4,
        background: "linear-gradient(45deg, #3a7bd5, #00d2ff)",
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          lineHeight: 1.4,
          letterSpacing: "1px",
        }}
      >
        From Vision to Reality: A Peek Into My Professional World
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "1.2rem",
          lineHeight: 1.6,
          fontStyle: "italic",
        }}
      >
        I’m an entrepreneur, licensed cosmetologist, and full-stack web developer. 
        Let me share my journey with you.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              sx={{
                maxWidth: 345,
                mx: "auto",
                background: "rgba(181, 13, 13, 0.7)",
                borderRadius: 4,
                boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <CardActionArea
                component="a"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.icon}
                    alt={item.hoverText}
                    sx={{
                      objectFit: "contain",
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                      padding: "10px",
                    }}
                  />
                )}
                <Typography
                  variant="h6"
                  sx={{
                    p: 2,
                    textAlign: "center",
                    color: hoveredItemId === item.id ? "primary.main" : "#fff",
                    fontWeight: "bold",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {hoveredItemId === item.id ? item.hoverText : item.text}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Home;
