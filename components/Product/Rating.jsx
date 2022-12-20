import {Box} from "@chakra-ui/react";
import React from "react";
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs";
const Rating = (props) => {
  return (
    <div>
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(props.rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{marginLeft: "1"}}
                  color={i < props.rating ? "black" : "red"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{marginLeft: "1"}} />;
            }
            return <BsStar key={i} style={{marginLeft: "1"}} />;
          })}
        <Box as="span" ml={2} color="gray.600" fontSize="sm">
          {props.ratingcount} review{props.ratingcount > 1 && "s"}
        </Box>
      </Box>
    </div>
  );
};

export default Rating;
