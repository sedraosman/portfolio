
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
export default function Project( {img,title,description,imghight,padding,github,paddingdis}) {
  return (
   <>
   <Card sx={{ maxWidth: 280 ,margin:5 , maxHeight:490 }}>
      <CardActionArea>
      <CardMedia
      component="img"
      image={img}
      alt="Sky"
      sx={{
        height: imghight,
        width: "100%",
       objectFit: "cover",   // 🔥 beyaz kenar yok
      }}
    />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"sx={{  paddingTop: padding }}>
           {title}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary',height:paddingdis}}>
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href = {github} >
          github 
        </Button>
      </CardActions>
    </Card>
   
   
   
   </>
  )
}
