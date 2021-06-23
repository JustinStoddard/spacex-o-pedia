import React, { lazy } from 'react';
import { CircularProgress } from '@material-ui/core';

import LaunchSummary from './Launches/Summary';
import LaunchDetails from './Launches/Details';
import RocketSummary from './Rockets/Summary';
import RocketDetails from './Rockets/Details';
import CoreSummary from './Cores/Summary';
import CoreDetails from './Cores/Details';
import MissionSummary from './Missions/Summary';
import MissionDetails from './Missions/Details';
import PayloadSummary from './Payloads/Summary';
import PayloadDetails from './Payloads/Details';
import CapsuleSummary from './Capsules/Summary';
import CapsuleDetails from './Capsules/Details';
import DragonSummary from './Dragons/Summary';
import DragonDetails from './Dragons/Details';
import ShipSummary from './Ships/Summary';
import ShipsDetails from './Ships/Details';
import LandingPadSummary from './LandingPads/Summary';
import LandingPadDetails from './LandingPads/Details';
import LaunchPadSummary from './LaunchPads/Summary';
import LaunchPadDetails from './LaunchPads/Details';
import HistorySummary from './History/Summary';
import HistoryDetails from './History/Details';
import InfoSummary from './Info/Summary';
import InfoDetails from './Info/Details';
import RoadsterSummary from './Roadster/Summary';
import RoadsterDetails from './Roadster/Details';

interface DataRendererProps {
  category?: string;
  type?: "summary";
  details?: any;
}

//This is kind of weird. Plans going forward are to handle all the differnt type of data in a GraphQL layer that way we dont have to handle all the different data on the frontend. 
const DataRenderer = ({ category, type, details }: DataRendererProps) => {
    switch (category) {
      case "launches":
        if (type === "summary") return <LaunchSummary details={details} />;
        return <LaunchDetails details={details} />;
      case "rockets":
        if (type === "summary") return <RocketSummary details={details} />
        return <RocketDetails details={details} />
      case "cores":
        if (type === "summary") return <CoreSummary details={details} />
        return <CoreDetails details={details} />
      case "missions":
        if (type === "summary") return <MissionSummary details={details} />
        return <MissionDetails details={details} />
      case "payloads":
        if (type === "summary") return <PayloadSummary details={details} />
        return <PayloadDetails details={details} />
      case "capsules":
        if (type === "summary") return <CapsuleSummary details={details} />
        return <CapsuleDetails details={details} />
      case "dragons":
        if (type === "summary") return <DragonSummary details={details} />
        return <DragonDetails details={details} />
      case "ships":
        if (type === "summary") return <ShipSummary details={details} />
        return <ShipsDetails details={details} />
      case "landingpads":
        if (type === "summary") return <LandingPadSummary details={details} />
        return <LandingPadDetails details={details} />
      case "launchpads":
        if (type === "summary") return <LaunchPadSummary details={details} />
        return <LaunchPadDetails details={details} />
      case "history":
        if (type === "summary") return <HistorySummary details={details} />
        return <HistoryDetails details={details} />
      case "info":
        if (type === "summary") return <InfoSummary details={details} />
        return <InfoDetails details={details} />
      case "roadster":
        if (type === "summary") return <RoadsterSummary details={details} />
        return <RoadsterDetails details={details} />
      default:
        return <CircularProgress />;
    }
};

export default DataRenderer;