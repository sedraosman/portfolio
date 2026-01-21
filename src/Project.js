import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function Project({ img, title, description, github }) {
  return (
    <Card
      sx={{
        width: { xs: '90%', sm: 350 },   
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        m: 2,
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        {/* IMAGE */}
        <CardMedia
          component="img"
          image={img}
          alt={title}
          sx={{
            height: 260,
            objectFit: 'contain',     
            backgroundColor: '#fffff',    
            p: 1,
          }}
        />

        {/* CONTENT */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography gutterBottom variant="h6" align="center">
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flexGrow: 1,
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>

      {/* ACTIONS */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button size="small" href={github} target="_blank">
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
