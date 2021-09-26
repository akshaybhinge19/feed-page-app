import React,{useState, useEffect} from 'react'
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function DisplayCard(props){
    const {result,page}=props;

    const [data, setData] = useState(result);
    const [sortType, setSortType] = useState("Date");
    useEffect(() => {
        const sortArray = type => {
            const types = {
                Date: "event_date",
                Likes: "likes",
                Views: "views",
                Share: "shares",
            };
        const sortProperty = types[type];
        const sorted = [...result].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
        };
        sortArray(sortType);
    }, [result, sortType]);
    return (
        <div className="container">
        <Box sx={{ minWidth:120}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort Items</InputLabel>
                <Select labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sort Items" 
                        onChange={(e) => setSortType(e.target.value)}> 
                    <MenuItem value="Date">Date</MenuItem>
                    <MenuItem value="Likes">Likes</MenuItem>
                    <MenuItem value="Views">Views</MenuItem>
                    <MenuItem value="Share">Share</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Typography sx={{color: 'text.disabled'}}component='span'>Page: {page}</Typography>
        <ImageList cols={2} rowHeight={164}>
        {
        data.map((ele,i)=>
        <Card sx={{ display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            boxShadow: 2,
            background:'#FBEAFF',
            borderRadius: 10, 
            margin:'10px',":hover": {
            transform: 'scale(1.005)'
            }}} key={ele.id+i}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div"> 
                {ele.event_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {ele.event_date}
                </Typography>
            </CardContent>
            <CardMedia
                component="img"
                width="500"
                height="260"
                image={ele.thumbnail_image}
                alt="green iguana"
                loading="lazy"
                sx={{objectFit:"contain", padding:"5px" }}
            />
            <CardActions>
                <Button size="small"><FavoriteRoundedIcon/>{ele.likes}</Button>
                <Button size="small"><VisibilityIcon/>{ele.views}</Button>
                <Button size="small"><ShareIcon fontSize="small"/>{ele.shares}</Button>
            </CardActions>
        </Card>
    )}
    </ImageList>
    </div>)
}
export default DisplayCard