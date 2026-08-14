import { CallButton } from "@/components/CallButton";
import { MembershipVideo } from "@/components/MembershipVideo";
import { CheckIcon, CrossIcon } from "@/components/icons";
import { plans } from "@/lib/site";

export function Memberships() {
  return (
    <section className="section plans" id="memberships">
      <div className="wrap">
        <div className="plans__head">
          <h2 className="h2">Save more</h2>
          <span>With a Founders Membership</span>
        </div>

        <MembershipVideo />

        <div className="plan-grid">
          {plans.map((plan) => (
            <div
              key={plan.tag}
              className={`plan${plan.featured ? " plan--feature" : ""}`}
            >
              <span className="plan__tag">{plan.tag}</span>
              <div className="plan__price">{plan.price}</div>
              <div className="plan__unit">{plan.unit}</div>
              <ul className="plan__feats">
                {plan.features.map((feature) => (
                  <li key={feature.label} className={feature.included ? undefined : "off"}>
                    {feature.included ? (
                      <CheckIcon className="yes" />
                    ) : (
                      <CrossIcon className="no" />
                    )}
                    <span>{feature.label}</span>
                  </li>
                ))}
              </ul>
              <CallButton variant="btn--solid btn--block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
