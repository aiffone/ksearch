import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10
  },
  title: {
    fontSize: 18,
  },
  pos: {
    fontSize: 14,
    marginBottom: 12,
  },
});

const UserComponent = (props) => {
  const classes = useStyles();
  const { firstName, lastName, age, address, department, buzzWord, email, gender } = props.item;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {lastName} {firstName}
        </Typography>
        <Typography variant="body1" component="h2">
          ({email})
          <br />
          Age: {age}
          <br />
          Gender: {gender}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Department: {department}
        </Typography>
        <Typography variant="body2" component="p">
          Address: {address}
          <br />
          Buzz Word: {buzzWord}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserComponent;
