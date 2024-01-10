import { useState } from 'react';
import { useDevCycleClient } from '@devcycle/react-client-sdk';

function Description() {
  const devcycleClient = useDevCycleClient()
  const [variationKey, setVariationKey] = useState(getVariationKey(devcycleClient))
  devcycleClient.subscribe('configUpdated', () => {
    setVariationKey(getVariationKey(devcycleClient))
  })

  return (
    <div className="App-description">
      {getMessage(variationKey)}
      <a
        className="App-link"
        href="https://docs.devcycle.com/sdk/client-side-sdks/react/"
        target="_blank"
        rel="noopener noreferrer"
      >
        DevCycle React SDK Docs
      </a>
    </div>
  );
}

const getVariationKey = (devcycleClient) => {
  const features = devcycleClient.allFeatures()
  return features['hello-togglebot']?.variationKey
}

const getMessage = (variationKey) => {
  switch (variationKey) {
    case undefined:
      return (
        <>
          <h3>Welcome to DevCycle's example app.</h3>
          <p>
            Follow our README guide to create the Feature and Variables you need to control this app in DevCycle.
          </p>
        </>
      )
    case 'variation-wink':
      return (
        <>
          <h3>Great! You've taken the first step in exploring DevCycle.</h3>
          <p>
            You've successfully toggled your very first Variation. You are now serving a different value to your users and you can see how the example app has reacted to this change.
          </p>
          <p>
            Next, go ahead and create a whole new Variation to see what else is possible in this app.
          </p>
        </>
      )
    case 'variation-base':
      return (
        <>
          <h3>Welcome to DevCycle's example app.</h3>
          <p>
            If you got here through the onboarding flow, just follow the instructions to change and create new Variations and see how the app reacts to new Variable values.
          </p>
        </>
      )
    default: // custom variation
      return (
        <>
          <h3>You're getting the hang of things.</h3>
          <p>
            By creating a new Variation with new Variable values and toggling it on for all users, you've already explored the fundamental concepts within DevCycle.
          </p>
          <p>
            There's still so much more to the platform, so go ahead and complete the onboarding flow and play around with the feature that controls this example in your dashboard.
          </p>
        </>
      )
  }
}

export default Description;
