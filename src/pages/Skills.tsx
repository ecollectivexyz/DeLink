import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Skills() {
  return (
    <Stack spacing={5}>
      <Autocomplete
        multiple
        id="tags-standard"
        size='medium'
        options={skills}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Skills"
            placeholder="Search for skills"
          />
        )}
      />
    </Stack>
  );
}

// TODO : get data from the DeLink Skills Schema
// This is only some random examples
const skills = [
  { name: 'Dapp developer', address: "0x67733d0412e6d7cb661f38e3869391e3074fa83e8df37d8268948d932a8212d5" },
  { name: 'Smart contract developer', address: "0x2c48e32bc0e0ecf61a71776f7396b507e24e8a4f39b5eb7e041a586721e44e9c" },
  { name: 'Blockchain architect', address: "0x9e188e3c88a897d12367648efcf7e444a1ca29e5cf2c3220a681524d596c176d" },
  { name: 'Decentralized application designer', address: "0xb2f44e0c9c6a81edc93d3138a4f34a27e2f6d85a333abf65477d1e7e90864681" },
  { name: 'Web3 integration specialist', address: "0x8f6b6051b51155d4088fc39d1e570486f95a5a0e0d1e699f9aa34c1f2d4b6f10" },
  { name: 'Blockchain security auditor', address: "0x3d8ca03b34bf1f7890ad1aa8a3de0f7f08bcf9d9c9c991bcf1f7a3d2b8a3c3a4" },
  { name: 'Ethereum developer', address: "0x7b6f9d9b25cc94c5d78c63e84d4d012f650fbf23d48b9aee86c73f54d3818da2" },
  { name: 'IPFS specialist', address: "0xa8e39d24c1fbfc688e08c77f4ca7b9a3480b8d1f62b4dabaf5f16bca13c55b63" },
  { name: 'Cryptoeconomics researcher', address: "0xf8b3a78a40a3d0af00ef992864c8692c17d6e33bc7eaa2b611611c81994b5472" },
  { name: 'NFT artist', address: "0xc1c78d22638f96852f18c9a4a8a329f2ebbf37255a6c6c7e836367534725344f" }
];
