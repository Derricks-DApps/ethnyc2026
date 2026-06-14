import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
);

const ENS_NAME = "agentbooks.eth";

async function verifyENS() {
  console.log("=================================");
  console.log("ENS VERIFICATION");
  console.log("=================================");
  console.log("Name:", ENS_NAME);

  const address = await provider.resolveName(ENS_NAME);

  if (!address) {
    console.log("❌ ENS name does not resolve.");
    console.log(
      "Either the name is not registered or no ETH address record is set."
    );
    return;
  }

  console.log("✅ Resolved Address:", address);

  const reverseName = await provider.lookupAddress(address);

  console.log(
    "Reverse Resolution:",
    reverseName || "No reverse record set"
  );

  const resolver = await provider.getResolver(ENS_NAME);

  if (!resolver) {
    console.log("❌ No resolver configured");
    return;
  }

  console.log("✅ Resolver Found");
  console.log("Resolver Address:", resolver.address);

  try {
    const avatar = await resolver.getText("avatar");
    console.log("Avatar:", avatar || "Not set");
  } catch {}

  try {
    const description = await resolver.getText("description");
    console.log("Description:", description || "Not set");
  } catch {}

  try {
    const url = await resolver.getText("url");
    console.log("Website:", url || "Not set");
  } catch {}

  try {
    const email = await resolver.getText("email");
    console.log("Email:", email || "Not set");
  } catch {}

  console.log("=================================");
  console.log("ENS PROFILE VERIFIED");
  console.log("=================================");
}

verifyENS().catch(console.error);
