import "@mui/material/styles";
import "@mui/material/Typography";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    veritoneLarge: React.CSSProperties;
    veritoneNunito: React.CSSProperties;
    veritoneNunitoMedium: React.CSSProperties;
    veritoneNunitoSmall: React.CSSProperties;
    Nunito18pxSemiBold: React.CSSProperties;


  }

  interface TypographyVariantsOptions {
    veritoneLarge?: React.CSSProperties;
    veritoneNunito?: React.CSSProperties;
    veritoneNunitoMedium?: React.CSSProperties;
    veritoneNunitoSmall?: React.CSSProperties;
    Nunito18pxSemiBold?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    veritoneLarge: true;
    veritoneNunito: true;
    veritoneNunitoMedium: true;
    veritoneNunitoSmall: true;
    Nunito18pxSemiBold: true;
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
    veritoneTextVariant: {
      primary: string;
      secondary: string;
    }
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
    veritoneTextVariant?: {
      primary: string;
      secondary: string;
    };
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    veritoneLight: true;
  }
}