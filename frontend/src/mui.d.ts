import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    veritoneLarge: React.CSSProperties;
    veritoneNunito: React.CSSProperties;
    veritoneNunitoSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    veritoneLarge?: React.CSSProperties;
    veritoneNunito?: React.CSSProperties;
    veritoneNunitoSmall?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    veritoneLarge: true;
    veritoneNunito: true;
    veritoneNunitoSmall: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
      secondary: string;
    };
    veritoneLight: {
      main: string;
      contrastText: string;
    };
  }

  interface PaletteOptions {
    border?: {
      primary: string;
      secondary: string;
    };
    veritoneLight?: {
      main: string;
      contrastText: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    veritoneLight: true;
  }
}