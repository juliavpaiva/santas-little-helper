import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function LittleMessage(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        <Link color="inherit" href="https://github.com/juliavpaiva/santas-little-helper">
          Creaded by Julia Paiva
        </Link>
      </Typography>
    );
  }