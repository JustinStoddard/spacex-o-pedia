import React from 'react';

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

interface DataRendererProps {
  category?: string;
  type?: "summary" | "details";
  details?: any;
}

const DataRenderer = ({ category, type, details }: DataRendererProps) => {
    switch (category) {
      case "launches":
        if (type) return <LaunchSummary details={details} />;
        return <LaunchDetails details={details} />;
      case "rockets":
        if (type) return <RocketSummary details={details} />
        return <RocketDetails details={details} />
      case "cores":
        if (type) return <CoreSummary details={details} />
        return <CoreDetails details={details} />
      case "missions":
        if (type) return <MissionSummary details={details} />
        return <MissionDetails details={details} />
      case "payloads":
        if (type) return <PayloadSummary details={details} />
        return <PayloadDetails details={details} />
      case "capsules":
        if (type) return <CapsuleSummary details={details} />
        return <CapsuleDetails details={details} />
      case "dragons":
      case "ships":
      case "landingpads":
      case "launchpads":
      case "history":
      case "info":
      case "roadster":
      default:
        if (type) return <LaunchSummary details={details} />;
        return <LaunchDetails details={details} />;
    }
};

export default DataRenderer;