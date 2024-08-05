import { Keypair } from "@solana/web3.js"

import wallet from "./dev-wallet-cohort-application.json"

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

console.log(`Pubkey is: ${keypair.publicKey}`);
