function Home() {
  return (
    <div className="HomeCss">
      <h1>Crowdfunding Your Billion-Dollar Idea</h1>
      <h2>Background</h2>
      <p>
        Imagine that you, or your company, want to create the next
        billion-dollar idea. Way to go! One problem: you need more funds to
        support the development, marketing, and launch. To source the initial
        funds, you use a crowdfunding platform and share your idea for
        fundraising. A good crowdfunding platform can help your community and
        your users become shareholders in your project. Web3 is a perfect
        technology to help build this crowdfunding platform and campaign.
      </p>
      <br></br>
      <h2>Functionality</h2>
      <p>
        <ul>
          <li>
            Crowdfunding campaign where users can pledge and claim funds to, and
            claim funds from, the contract.
          </li>
          <li>Funds take the form of a custom ERC20 token.</li>
          <li>Each crowdfunded project should have a funding goal.</li>
          <li>
            When a funding goal is not met, customers can get a refund of their
            pledged funds.{" "}
          </li>
          <li>Project owners can create a new crowdfunding project.</li>
          <li>
            Every new crowdfunded project has a timeline and a funding goal.
          </li>
          <li>Users can fund different projects within the timeline.</li>
          <li>
            If the funds are not successfully raised by the time the campaign
            ends, users should be able to withdraw their funds.
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Home;
