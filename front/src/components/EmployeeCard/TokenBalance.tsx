import { useEffect, useState } from "react";
import useEthContext from "../../hooks/useEthContext";

type TokenBalanceProps = {
  account: string;
};

const TokenBalance = ({ account }: TokenBalanceProps) => {
    const { state: { accounts, contract } } = useEthContext()
    const [tokenBalance, setTokenBalance] = useState(0)

    useEffect(() => {
        (async () => {
          if (account != '' && account.match(/(\b0x[a-fA-F0-9]{40}\b)/g)) {
            const balance = await contract?.methods?.balanceOf(account).call({from: account})
            if (balance) {
              setTokenBalance(balance)
            }
            else {
              setTokenBalance(0)
            }
          }
          else {
            setTokenBalance(0)
          }
        })()
    }, [tokenBalance, setTokenBalance, accounts, contract, account])

  return (
    <p>
      The entered wallet address has already {tokenBalance ?? 0} employee card
    </p>
  );
};

export default TokenBalance;