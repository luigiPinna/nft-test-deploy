async function main() {
    const ShardanaNft = await ethers.getContractFactory("ShardanaNft");
    const shardanaNft = await ShardanaNft.deploy();
  
    await shardanaNft.deployed();
    console.log("ShardanaNft deployed:", shardanaNft.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    