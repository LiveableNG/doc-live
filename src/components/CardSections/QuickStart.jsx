import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../HomepageComponents";

export default function QuickStartSection({ title, className }) {
  return (
    <Section  className={className}>
      <Card
        title="👩‍💻 Quick Start"
        description="Let’s get you verified information provided by your prospective tenants."
        to="/docs/integration-guides/quick-start"
      />
      <Card
        title="👋 SDKs and Plugins"
        description="Easily integrate Good Tenants with your platform using any of our SDKs."
        to="/docs/sdks-and-plugins/frontend-libraries"
      />
    </Section>
  );
}
