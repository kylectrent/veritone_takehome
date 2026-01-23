import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
    interface TypographyVariants {
      veritoneLarge: React.CSSProperties;
    }
  
    interface TypographyVariantsOptions {
      veritoneLarge?: React.CSSProperties;
    }
  }
  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      veritoneLarge: true;
    }
  }  