import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import 'dotenv/config'

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY as string,
        ethers.getDefaultProvider("https://rinkeby-light.eth.linkpool.io/")
    ),
)

const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
const nft = sdk.getNFTModule(CONTRACT_ADDRESS);

async function mint() {
    const r = await nft.mint({
        name: 'Hi 👋',
        description: "If you are interested in...follow me✅",
        image: "https://i.imgur.com/ryIM26I.png",
        properties: {
            homeless: 0,
            paid: "alot"
        },
    })
    console.log(r)
}

mint()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err)
        process.exit(1)
    })
