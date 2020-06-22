import React, { useState } from "react";
import { Box, Flex, Button, Heading } from "rebass";
import { Input, Label, Textarea } from "@rebass/forms";
import { ToastContainer, toast } from 'react-toastify';

import PageHeading from "../components/PageHeading";
import Container from "../components/Container";

const Description = () => (
  <Box width={[1, 1 / 2]} pr={5}>
    <Heading variant="highlight.pink">
      What does being a partner look like?
    </Heading>
    <p>
      We have so much to gain from working together. Joining the network means
      sharing what you have to offer - which is different for different organisations.
      If you're interested in seeing your organisation join the network, share what you're
      keen to get out of it, and what your organisation could offer in the form. Partner
      organisations share custom tools, research and analysis, staff time through participation
      in mentorship and support, and financial contributions.
    </p>

    <p>
      Partners gain access to shared tools, mentorship programs, trainings, and conversations
      about next steps on developing tools identified as key to the success of our movements. 
      We share with each other in good faith, and ensure we share on clear terms - because we 
      all share the same goals. We’re working together to prevent climate devastation, and to 
      create a society where everyone, no matter your background, your gender, your ability or your
      skin colour, can thrive.
    </p>
    <br />
    <br />
    {/* <Heading variant="highlight.orange">
      Examples of what you could give, and could gain
    </Heading>
    <ul>
      <li>
        Apps and tools you’ve built (think doorknocking apps, dialling apps,
        metrics tools)
      </li>
      <li>
        Maps of your tech stack (all your tools and websites, and how they
        connect) so that other teams considering your tools can ask your advice
      </li>
      <li>
        Your expertise, running a one off training, a series, or mentoring
        someone one on one
      </li>
      <li>Spreadsheets of MP contact details</li>
      <li>
        Spreadsheets with superb formulas in them useful for other campaigners,
        organisers, ops workers, techies, fundraisers
      </li>
      <li>
        Your time, or that of other techies or tech volunteers in your
        community, to help other organisations and campaigners build, deploy,
        and troubleshoot tech
      </li>
      <li>
        Your time organising the community - running induction calls for
        volunteers, surveying new organisations, reaching out to campaigning
        groups of marginalised people to see where our community can support
        their work
      </li>
    </ul>
    < br/>< br/> */}
    <Heading variant="highlight.green">Once you have expressed interest</Heading>
    <p>
      A member of the ProgTech team will get in touch to discuss further. We'll 
      then form a membership agreement that outlines in detail what your organisation 
      can share, and the key ways the network will support you in the tech you need 
      to bring on a better world.
    </p>
    <p>
      If your membership application is accepted, you and the tech & digital
      staff, volunteers, and activists that make up your organisation will be
      invited to join our Slack community, our shared library of code, tools,
      and resources, and upcoming trainings and events.
    </p>
    <p>Looking forward to taking these next steps together.</p>
  </Box>
);

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [role, setRole] = useState("");
  const [keyChallenges, setKeyChallenges] = useState("");
  const [wishYouCouldDo, setWishYouCouldDo] = useState("");
  const [keyBenefits, setKeyBenefits] = useState("");
  const [canOffer, setCanOffer] = useState("");
  const [buttonText, setButtonText] = useState("Join");

  const submit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      email,
      data: { role, organisation, keyChallenges, wishYouCouldDo, keyBenefits, canOffer },
      form: "PARTNER",
    };
    const url = `${window.location.protocol}://${window.location.hostname}${
      window.location.port && ":" + window.location.port
    }`;
    setButtonText("Loading...");
    try {
      const res = await fetch(`/api/submission`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      setButtonText("Success");
      toast.dark("Thanks for your submission")
    } catch (error) {
      console.error(error);
      setButtonText("An Error Occured");
    }
  };
  return (
    <>
      <Description />
      <Box width={[1, 1 / 2]} as="form" onSubmit={submit} py={3}>
        <Flex flexWrap="wrap" mb={3}>
          <Box width={1 / 2}>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>
          <Box width={1 / 2}>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box width={1 / 2}>
            <Label htmlFor="organisation">Organisation Name</Label>
            <Input
              id="organisation"
              name="organisation"
              value={organisation}
              onChange={(e) => setOrganisation(e.target.value)}
            />
          </Box>
          <Box width={1 / 2}>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </Box>
          <Box width={1}>
            <Label htmlFor="keyChallenges">
              What are the key challenges your organisation faces with tech and
              data?
            </Label>
            <Textarea
              id="keyChallenges"
              name="keyChallenges"
              value={keyChallenges}
              onChange={(e) => setKeyChallenges(e.target.value)}
            />
          </Box>
          <Box width={1}>
            <Label htmlFor="wishYouCouldDo">
              What are the things you wish you could do?
            </Label>
            <Textarea
              id="wishYouCouldDo"
              name="wishYouCouldDo"
              value={wishYouCouldDo}
              onChange={(e) => setWishYouCouldDo(e.target.value)}
            />
          </Box>
          <Box width={1}>
            <Label htmlFor="keyBenefits">
              What are the key ways your organisation could benefit from
              collaboration with other organisations and the network?
            </Label>
            <Textarea
              id="keyBenefits"
              name="keyBenefits"
              value={keyBenefits}
              onChange={(e) => setKeyBenefits(e.target.value)}
            />
          </Box>
          <Box width={1}>
            <Label htmlFor="canOffer">
              What are the key things your organisation has to offer and share
              with other progressive organisations and the network?
            </Label>
            <Textarea
              id="canOffer"
              name="canOffer"
              value={canOffer}
              onChange={(e) => setCanOffer(e.target.value)}
            />
          </Box>
          <Box textAlign="right" width={1}>
            <Button width={1 / 2}>{buttonText}</Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

const App = (props) => {
  return (
    <Flex flexWrap="wrap">
      <PageHeading heading="Become a Partner" />
      <Flex p={5} width={1}>
        <Container maxWidth={1200}>
          <Form />
        </Container>
      </Flex>
    </Flex>
  );
};

export default App;
