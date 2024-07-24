import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Upcoming Events
        </Typography>
        <Typography color={medium}> Feb 2024 </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/advertisement.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}> Codeft </Typography>
        <Typography color={medium}> @coding cell </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Get yourself ready!!!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;