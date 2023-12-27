import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { feedQuery, searchQuery } from "../utils/data";
import MasonryLayout from "./MasonryLayout";
import Spinner from "./Spinner";

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(true);
  // if(loading) return <Spinner message = "Lets see what pops up today:)"/>
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      console.log(query);
      client.fetch(query).then((data) => {
        setPins(data);
        console.log(data);
        setLoading(false);
      });
      setLoading(false);
    } else {
      setLoading(true);

      client.fetch(feedQuery).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  const ideaName = categoryId || "new";
  if (loading) {
    return (
      <Spinner message={`We are adding ${ideaName} ideas to your feed!`} />
    );
  }

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
