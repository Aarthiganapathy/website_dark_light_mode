import React, { useState, useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { ScrollLink } from "react-scroll";
import { useTheme, MaterialUISwitch } from "../context/ThemeContext";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Container,
  IconButton,
  Divider,
  Fade,
} from "@mui/material";
import {
  ArrowForwardRounded,
  Menu,
  Close,
  DarkMode,
  LightMode,
} from "@mui/icons-material";

import logo from "../assets/image/Icon.svg";
import p1 from "../assets/image/p-1.jpg";
import p2 from "../assets/image/p-2.jpg";
import p3 from "../assets/image/p-3.png";
import vadu1 from "../assets/image/vadu-1.webp";
import karaikudi2 from "../assets/image/karaikudi-2.jpg";
import swami3 from "../assets/image/swami-3.jpg";
import food1 from "../assets/image/food-1.jpg";
import food2 from "../assets/image/food-2.webp";
import food3 from "../assets/image/food-3.jpg";

import "./Home.css";

const StarBackground = ({ theme }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Create stars
    const newStars = [];
    const starCount = theme === 'dark' ? 200 : 50; // More stars for dark theme
    
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3,
        opacity: Math.random(),
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 7,
      });
    }
    
    setStars(newStars);
  }, [theme]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundColor: theme === 'dark' ? '#0a0a20' : '#f0f0f0',
        overflow: 'hidden',
      }}
    >
      {stars.map((star) => (
        <Box
          key={star.id}
          sx={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: theme === 'dark' ? 'white' : 'rgba(0,0,0,0.3)',
            borderRadius: '50%',
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s infinite ${star.delay}s alternate`,
            '@keyframes twinkle': {
              '0%': { opacity: star.opacity },
              '50%': { opacity: star.opacity * 0.3 },
              '100%': { opacity: star.opacity },
            },
          }}
        />
      ))}
    </Box>
  );
};

export const Index = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const places = [
    {
      img: p1,
      title: "Gangaikonda Cholapuram",
      desc: "Ancient capital of Chola dynasty with magnificent architecture",
    },
    {
      img: p2,
      title: "Royal Palace and Art Gallery",
      desc: "Showcases the grandeur of Thanjavur Nayak kingdom",
    },
    {
      img: p3,
      title: "Sarasvati Mahal Library",
      desc: "One of the oldest libraries in Asia with rare manuscripts",
    },
  ];

  const destinations = [
    {
      img: vadu1,
      title: "Vaduvoor Bird Sanctuary",
      desc: "Home to migratory birds in the wetlands",
    },
    {
      img: karaikudi2,
      title: "Karaivetti Bird Sanctuary",
      desc: "Important wetland for waterbirds in Tamil Nadu",
    },
    {
      img: swami3,
      title: "Swami Malai Temple",
      desc: "One of the six abodes of Lord Murugan",
    },
  ];

  const blogs = [
    {
      img: food1,
      title: "Cuisines of the Tamil Land",
      desc: "Explore the rich culinary heritage of Tamil Nadu",
    },
    {
      img: food2,
      title: "Traditional Arts & Crafts",
      desc: "Discover the vibrant handicrafts and art forms",
    },
    {
      img: food3,
      title: "Festivals of the Region",
      desc: "Celebrate the colorful festivals of Tamil culture",
    },
  ];

  return (
    <Box className={`app-container ${theme}`}>
      <StarBackground theme={theme} />
      
      {/* Header Section */}
      <Box
        className="header"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          color: theme === 'dark' ? 'white' : 'text.primary',
          position: "relative",
          pt: '80px',
        }}
      >
        {/* Navigation */}
        <Box
          className={`nav-container ${scrolled ? "scrolled" : ""}`}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "1rem", md: "2rem" },
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            transition: "all 0.3s ease",
            backgroundColor: scrolled
              ? theme === "dark"
                ? "rgba(30, 30, 30, 0.9)"
                : "rgba(255, 255, 255, 0.9)"
              : "transparent",
            boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img src={logo} alt="Logo" style={{ height: "40px" }} />
            <Typography
              variant="h6"
              component="span"
              sx={{
                fontFamily: '"Algerian", sans-serif',
                fontSize: "1.5rem",
                color: theme === "dark" ? "#7cb166c7" : "#5a8f3d",
                fontStyle: "italic",
              }}
            >
              Tamil Nadu
            </Typography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <ScrollLink to="places-section" smooth duration={400}>
              <Button color="inherit">About</Button>
            </ScrollLink>
            <Link to="/Pricing" style={{ textDecoration: "none" }}>
              <Button color="inherit">Pricing</Button>
            </Link>
            <Link to="/famous" style={{ textDecoration: "none" }}>
              <Button color="inherit">Famous</Button>
            </Link>
            <ScrollLink to="places-section" smooth duration={400}>
              <Button color="inherit">Places</Button>
            </ScrollLink>
            <MaterialUISwitch
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </Box>

          <IconButton
            color="inherit"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={() => setNavVisible(true)}
          >
            <Menu fontSize="large" />
          </IconButton>
        </Box>

        {/* Mobile Navigation */}
        <Box
          className="mobile-nav"
          sx={{
            position: "fixed",
            top: 0,
            right: navVisible ? 0 : "-100%",
            width: "70%",
            height: "100vh",
            backgroundColor: theme === "dark" ? "#1e1e1e" : "#ffffff",
            zIndex: 1100,
            transition: "right 0.3s ease",
            boxShadow: "-2px 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "2rem",
            }}
          >
            <IconButton onClick={() => setNavVisible(false)}>
              <Close fontSize="large" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <ScrollLink
              to="places-section"
              smooth
              duration={400}
              onClick={() => setNavVisible(false)}
            >
              <Button fullWidth color="inherit">
                About
              </Button>
            </ScrollLink>
            <Link
              to="/pricing"
              style={{ textDecoration: "none" }}
              onClick={() => setNavVisible(false)}
            >
              <Button fullWidth color="inherit">
                pricing
              </Button>
            </Link>
            <Link
              to="/famous"
              style={{ textDecoration: "none" }}
              onClick={() => setNavVisible(false)}
            >
              <Button fullWidth color="inherit">
                Famous
              </Button>
            </Link>
            <ScrollLink
              to="places-section"
              smooth
              duration={400}
              onClick={() => setNavVisible(false)}
            >
              <Button fullWidth color="inherit">
                Places
              </Button>
            </ScrollLink>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {theme === "dark" ? <DarkMode /> : <LightMode />}
              <MaterialUISwitch
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
            </Box>
          </Box>
        </Box>

        {/* Hero Content */}
        <Box
          className="text-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            textAlign: "center",
            color: theme === 'dark' ? 'white' : 'text.primary',
          }}
        >
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontSize: { xs: "2.5rem", md: "4rem" },
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, #90caf9, #f48fb1, #ce93d8, #90caf9)"
                      : "linear-gradient(135deg, #1976d2, #d81b60, #8e24aa, #1976d2)",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundSize: "300% 300%",
                  animation: "gradient 8s ease infinite",
                }}
              >
                Brihadishvara Temple
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  marginBottom: "2.5rem",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  maxWidth: "800px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  lineHeight: 1.6,
                }}
              >
                The Brihadeeswara Temple, also known as Peruvudaiyar Kovil, is a
                UNESCO World Heritage Site located in Thanjavur. Dedicated to
                Lord Shiva, this architectural marvel represents the finest
                example of Dravidian temple architecture.
              </Typography>
              <ScrollLink to="places-section" smooth duration={500}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardRounded />}
                  sx={{
                    backgroundColor:
                      theme === "dark"
                        ? "rgba(144, 202, 249, 0.9)"
                        : "rgba(25, 118, 210, 0.9)",
                    color: "white",
                    fontWeight: "bold",
                    padding: "12px 24px",
                    borderRadius: "50px",
                    "&:hover": {
                      backgroundColor:
                        theme === "dark"
                          ? "rgba(144, 202, 249, 1)"
                          : "rgba(25, 118, 210, 1)",
                      transform: "translateY(-3px)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Explore More
                </Button>
              </ScrollLink>
            </Box>
          </Fade>
        </Box>
      </Box>

      <Outlet />

      {/* Section - Places to Visit */}
      <Container id="places-section" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #90caf9, #f48fb1, #ce93d8, #90caf9)",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%",
              animation: "gradient 8s ease infinite",
              mb: 2,
            }}
          >
            Places to Visit
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color:
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(0, 0, 0, 0.7)",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Thanjavur, the rice bowl of Tamil Nadu, boasts a rich cultural
            heritage with magnificent temples, royal palaces, and artistic
            treasures that reflect its glorious past under the Chola dynasty.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {places.map((place, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      theme === "dark"
                        ? "0 10px 20px rgba(144, 202, 249, 0.2)"
                        : "0 10px 20px rgba(25, 118, 210, 0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={place.img}
                    alt={place.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "1.5rem",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      color="white"
                      sx={{ fontWeight: 600 }}
                    >
                      {place.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.8)"
                      sx={{ mt: 1 }}
                    >
                      {place.desc}
                    </Typography>
                  </Box>
                  <CardContent sx={{ position: "relative", zIndex: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {place.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Section - Nearby Destinations */}
      <Box
        sx={{
          py: 8,
          backgroundColor:
            theme === "dark"
              ? "rgba(10, 10, 30, 0.5)"
              : "rgba(240, 240, 240, 0.5)",
          backdropFilter: 'blur(5px)',
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #90caf9, #f48fb1, #ce93d8, #90caf9)",
                backgroundClip: "text",
                color: "transparent",
                backgroundSize: "300% 300%",
                animation: "gradient 8s ease infinite",
                mb: 2,
              }}
            >
              Nearby Destinations
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color:
                  theme === "dark"
                    ? "rgba(255, 255, 255, 0.8)"
                    : "rgba(0, 0, 0, 0.7)",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Explore the beautiful surroundings of Thanjavur with these
              incredible nearby destinations that offer unique experiences and
              breathtaking views.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {destinations.map((destination, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow:
                        theme === "dark"
                          ? "0 10px 20px rgba(144, 202, 249, 0.2)"
                          : "0 10px 20px rgba(25, 118, 210, 0.2)",
                    },
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={destination.img}
                      alt={destination.title}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "1.5rem",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        color="white"
                        sx={{ fontWeight: 600 }}
                      >
                        {destination.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="rgba(255,255,255,0.8)"
                        sx={{ mt: 1 }}
                      >
                        {destination.desc}
                      </Typography>
                    </Box>
                    <CardContent sx={{ position: "relative", zIndex: 1 }}>
                      <Typography gutterBottom variant="h6" component="h3">
                        {destination.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Section - Blogs */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 700,
              background:
                "linear-gradient(135deg, #90caf9, #f48fb1, #ce93d8, #90caf9)",
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%",
              animation: "gradient 8s ease infinite",
              mb: 2,
            }}
          >
            Discover More
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color:
                theme === "dark"
                  ? "rgba(255, 255, 255, 0.8)"
                  : "rgba(0, 0, 0, 0.7)",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Dive deeper into the rich culture, traditions, and flavors of Tamil
            Nadu through our curated collection of articles and stories.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "12px",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: theme === 'dark' ? 'rgba(30, 30, 30, 0.7)' : 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      theme === "dark"
                        ? "0 10px 20px rgba(144, 202, 249, 0.2)"
                        : "0 10px 20px rgba(25, 118, 210, 0.2)",
                  },
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={blog.img}
                    alt={blog.title}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "1.5rem",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      color="white"
                      sx={{ fontWeight: 600 }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="rgba(255,255,255,0.8)"
                      sx={{ mt: 1 }}
                    >
                      {blog.desc}
                    </Typography>
                  </Box>
                  <CardContent sx={{ position: "relative", zIndex: 1 }}>
                    <Typography gutterBottom variant="h6" component="h3">
                      {blog.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;