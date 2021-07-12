import React from "react";
import CandidateItem from "./CandidateItem";

const CandidatesList = (props) => {
  return (
    <div>
      <h2>Lista de Candidatos</h2>
      {props.candidates.map(candidate => {
        return (
          <CandidateItem
            candidate={candidate}
            decideCandidate={props.decideCandidate}
          />
        );
      })}
    </div>
  );
};

export default CandidatesList;
