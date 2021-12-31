import React from "react";
import Loader from "react-loader-spinner";

import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, variables }: any) => {
  const { data, loading, error } = useQuery(query, { variables });
  if (loading)
    return (
      <div className="w-full flex justify-center">
        <Loader type="Oval" color="#000" height={100} width={100} />
      </div>
    );

  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
