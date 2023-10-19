import { Box, Card, CardHeader, CardMedia } from "@mui/material"
import { useState } from "react"
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const StyledCard = ({item, onEdit, onDelete}) => {
    const [editVisible, setEditVisible] = useState(false)
  return (
    <Card
    onMouseOver={()=> setEditVisible(true)}
    onMouseOut={()=> setEditVisible(false)}
    sx={{position:'relative'}}
    >
        <CardHeader title={item.name} sx={{color: 'dodgerblue', textAlign:'center'}}/>
            <CardMedia
                component="img"
                src={item.image}
                height="250"
                title={item.name}
                alt={item.name}
                sx={{objectFit:'cover', p:2}}
            />

            {editVisible&&
            <Box sx={{position:'absolute', top:'10px', right:'10px'}}>
                <EditIcon sx={{cursor:'pointer', color:'orange'}} onClick={()=>onEdit(item)}/>
                <DeleteOutlineIcon sx={{cursor:'pointer', color:'red'}} onClick={()=>onDelete(item.id)}/>
            </Box>
            }
    </Card>
  )
}

export default StyledCard