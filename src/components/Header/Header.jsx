import React from "react";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box id="header">
      <Box className="container">
        <Box className="header">
          <Box className="header-left">
            <Avatar
              sx={{ width: "33px", height: "33px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png"
            />
            <Typography variant="h6">
              <LanguageIcon /> UNITED STATES - ENGLISH
            </Typography>
            <Typography variant="h6">MK 30TH ANNIVERSARY</Typography>
            <Link to="/the_shop">
              <Typography variant="h6">SHOP MERCH</Typography>
            </Link>
          </Box>
          <Box className="header-rigth">
            <Typography variant="h6">REPORT A BUG</Typography>
            <Typography variant="h6">SUPPORT</Typography>
            <Typography variant="h6">PATCH NOTES</Typography>
            <Typography className="headerMainIcon1" variant="h6">
              <YouTubeIcon />
            </Typography>
            <Typography className="headerMainIcon2" variant="h6">
              <InstagramIcon />
            </Typography>
            <Typography className="headerMainIcon3" variant="h6">
              <TwitterIcon />
            </Typography>
            <Typography className="headerMainIcon4" variant="h6">
              <WhatsAppIcon />
            </Typography>
            <Typography className="headerMainIcon5" variant="h6">
              <LocalPhoneIcon />
            </Typography>
            <Typography className="headerMainIcon6" variant="h6">
              <TelegramIcon />
            </Typography>
            <Typography variant="h6">SIGN UP</Typography>
            <Typography variant="h6">SIGN IN</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
