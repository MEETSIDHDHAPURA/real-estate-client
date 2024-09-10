"use client";
import styles from "../../styles/auth.module.scss";
import { TextField, IconButton, Button, Typography, Box } from "@mui/material";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineHeart } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineShower } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const LoginComponent = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          width: "100vw",
          boxShadow: 3,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box
            sx={{
              height: 80,
              width: "100%",
              borderBottom: 1,
              borderColor: "lightgray",
              display: "flex",
              alignItems: "center",
              p: 2,
            }}
          >
            <MdOutlineMapsHomeWork
              size="20px"
              color="var(--primary-color)"
              style={{ color: "var(--primary-color)" }}
            />
            <Typography sx={{ ml: 2, fontWeight: 600, fontSize: "20px" }}>
              RealEstatePro
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 8 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: "100%",
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Welcome Back
              </Typography>
              <Typography
                variant="body2"
                sx={{ mt: 1, color: "text.secondary" }}
              >
                Welcome back! Please enter your details.
              </Typography>
              <Box
                component="form"
                onSubmit={() => {}} // todo: handle submit
                sx={{ marginTop: "2rem", width: "100%" }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <TextField
                    placeholder="Your email"
                    variant="outlined"
                    size="small"
                    fullWidth
                    // {...form.getInputProps("email")}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <AiOutlineMail size="20" />
                        </IconButton>
                      ),
                    }}
                  />
                  <TextField
                    placeholder="Password"
                    variant="outlined"
                    size="small"
                    fullWidth
                    type="password"
                    // {...form.getInputProps("password")}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    cursor: "pointer",
                    mt: 2,
                    color: "rgb(var(--primary-color))",
                    fontWeight: "bold",
                  }}
                >
                  Forgot Password?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <Button
                    sx={{
                      bgcolor: "rgb(var(--primary-color))",
                      textTransform: "none",
                      color: "white",
                      borderRadius: "12px",
                      padding: "10px",
                    }}
                    fullWidth
                  >
                    Login
                  </Button>
                  <Button
                    sx={{
                      border: "1px solid black",
                      textTransform: "none",
                      borderRadius: "12px",
                      color: "black",
                      padding: "10px",
                    }}
                    color="primary"
                    fullWidth
                    startIcon={<FcGoogle />}
                  >
                    Continue With Google
                  </Button>
                  <Typography
                    variant="body2"
                    sx={{ textAlign: "center", mt: 1 }}
                  >
                    {`Don't have an account? `}
                    <Link href="/authentication/signup">
                      <span
                        style={{ fontWeight: "bold", cursor: "pointer", ml: 1 }}
                      >
                        Signup Here
                      </span>
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            backgroundColor: "rgba(var(--primary-color)/.1)",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Box className={styles.triangle} />
          <Box
            sx={{
              mx: 2,
              width: "24rem",
              bgcolor: "white",
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              boxShadow: 3,
              zIndex: 50,
            }}
          >
            <Box sx={{ width: "100%", height: 200, position: "relative" }}>
              <Image
                src="/media/avatars/home1.jpeg"
                alt="popular image"
                priority
                layout="fill"
                style={{ borderRadius: "8px" }}
                // className={styles.image_properties}
              />
              <Button
                sx={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  ml: 1,
                  mt: 1,
                  bgcolor: "rgb(var(--primary-color))",
                  textTransform: "none",
                  color: "white",
                }}
              >
                Popular
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: 2,
                borderColor: "gray",
                alignItems: "center",
                p: 1,
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: 600, fontSize: "22px" }}>
                  Beverly SpringX
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  2821 Selvolia, Palm Harbor, TX
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    border: "1px solid black",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AiOutlineHeart
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--primary-color)",
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: 1, p: 1 }}>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <IoBedOutline
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--primary-color)",
                  }}
                />
                <strong>4 Beds</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <MdOutlineShower
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--primary-color)",
                  }}
                />
                <strong>2 Bathrooms</strong>
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <IoBedOutline
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--primary-color)",
                  }}
                />
                <strong>7x 7.5&#13217;</strong>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 1.5,
                bgcolor: "rgba(var(--primary-color)/.1)",
                borderRadius: "8px",
              }}
            >
              <Box>
                <Typography>Rent Sale</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#ff5733",
                  }}
                >
                  $2,700
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "#ff5733 " }}
                  >
                    /month
                  </Typography>
                </Typography>
              </Box>
              <Button
                sx={{
                  bgcolor: "rgb(var(--primary-color))",
                  color: "white",
                  borderRadius: "10px",
                  paddingY: "16px",
                }}
              >
                Apply Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
