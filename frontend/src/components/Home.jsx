import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {ShowContracts} from '../store/actions/actions.jsx'
import ContractsContainer from './ContractsContainer.jsx';

const Home = () => {
  return (
    <div>
    <ContractsContainer />
    </div>
  );
};

export default Home;
