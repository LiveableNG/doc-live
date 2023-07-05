import React from "react";
import {
  HomepageCard as Card,
  HomepageSection as Section,
} from "../HomepageComponents";

export default function QuickStartSection({ title, className }) {
  return (
    <Section title={title} className={className}>
      <Card
        title="👩‍💻 Tenant Verification"
        description="Verify the information provided by your prospective tenants."
        to="/docs/tenants/tenant-verification"
      />
      <Card
        title="👋 Find Tenant"
        description="Quickly discover tenant for your properties."
        to="/docs/tenants/find-tenant"
      />
    </Section>
  );
}
