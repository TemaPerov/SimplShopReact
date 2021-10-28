import styles from "./Card.module.css";
import * as React from "react";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AddToBasket,removeCardId } from "../store/action";
import { useLocation } from "react-router";

export default function BasicCard({ props,indx }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const addCartTo = (props) => {
    dispatch(AddToBasket(props)); 
  };

 const removeCart=()=>{
    dispatch(removeCardId(indx))
 }
  return (
    <Card key={props.id} sx={{ maxWidth: 31+'%' }} className={styles.card}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }} gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.label}
        </Typography>
        <Typography variant="body2">Price : {props.price} $</Typography>
      </CardContent>
      <CardActions>
        {location.pathname === "/baskat" ? (
          <Button size="small" onClick={() => removeCart(props)}>
            Remove
          </Button>
        ) : (
          <Button size="small" onClick={() => addCartTo(props)}>
            Add to...
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
